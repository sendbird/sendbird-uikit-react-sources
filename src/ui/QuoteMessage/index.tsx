import React, { ReactElement, useContext, useState } from 'react';
// import { FileMessage, User, UserMessage } from 'sendbird';
import { FileMessage, UserMessage } from '../../sendbird.min.js';
import './index.scss';

import Icon, { IconTypes, IconColors } from '../Icon';
import Label, { LabelTypography, LabelColors } from '../Label';
import ImageRenderer from '../ImageRenderer';
import { LocalizationContext } from '../../lib/LocalizationContext';
import {
  getClassName,
  getUIKitFileType,
  getUIKitFileTypes,
  isFileMessage,
  isGif,
  isSupportedFileView,
  isThumbnailMessage,
  isUserMessage,
  isVideo,
  truncateString,
} from '../../utils';
interface Props {
  message?: UserMessage | FileMessage;
  isByMe?: boolean;
  className?: string | Array<string>;
  onClick?: () => void;
}

export default function QuoteMessage({
  message,
  isByMe = false,
  className,
  onClick = () => {},
}: Props): ReactElement {
  const { parentMessage } = message;
  const parentMessageSender = parentMessage?.sender;
  const parentMessageSenderNickname = parentMessageSender?.nickname;
  const parentMessageUrl = parentMessage?.url || '';
  const parentMessageType = parentMessage?.type;
  const currentMessageSenderNickname = message?.sender?.nickname;

  const [isThumbnailLoaded, setThumbnailLoaded] = useState(false);
  const { stringSet } = useContext(LocalizationContext);
  const uikitFileTypes = getUIKitFileTypes();
  const splitUrl = parentMessageUrl.split('/');

  return (
    <div
      className={getClassName([className, 'sendbird-quote-message', isByMe ? 'outgoing' : 'incoming'])}
      key={parentMessage?.messageId}
      onClick={onClick}
    >
      <div className="sendbird-quote-message__replied-to">
        <Icon
          className="sendbird-quote-message__replied-to__icon"
          type={IconTypes.REPLY}
          fillColor={IconColors.ON_BACKGROUND_3}
          width="12px"
          height="12px"
        />
        <Label
          className="sendbird-quote-message__replied-to__text"
          type={LabelTypography.CAPTION_2}
          color={LabelColors.ONBACKGROUND_3}
        >
          {`${currentMessageSenderNickname} ${stringSet.REPLIED_TO} ${parentMessageSenderNickname}`}
        </Label>
      </div>
      <div className="sendbird-quote-message__replied-message">
        {/* text message */}
        {(isUserMessage(parentMessage) && parentMessage?.message?.length > 0) && (
          <div className="sendbird-quote-message__replied-message__text-message">
            <Label
              className="sendbird-quote-message__replied-message__text-message__word"
              type={LabelTypography.BODY_2}
              color={LabelColors.ONBACKGROUND_1}
            >
              {parentMessage?.message}
            </Label>
          </div>
        )}
        {/* thumbnail message */}
        {(isThumbnailMessage(parentMessage) && parentMessageUrl) && (
          <div className="sendbird-quote-message__replied-message__thumbnail-message">
            <ImageRenderer
              className="sendbird-quote-message__replied-message__thumbnail-message__image"
              url={parentMessageUrl}
              alt={parentMessageType}
              width="144px"
              height="108px"
              onLoad={() => setThumbnailLoaded(true)}
              defaultComponent={(
                <div className="sendbird-quote-message__replied-message__thumbnail-message__placeholder">
                  <div className="sendbird-quote-message__replied-message__thumbnail-message__placeholder__icon">
                    <Icon
                      type={isVideo(parentMessageType) ? IconTypes.PLAY : IconTypes.PHOTO}
                      fillColor={IconColors.ON_BACKGROUND_2}
                      width="22px"
                      height="22px"
                    />
                  </div>
                </div>
              )}
            />
            {(isVideo(parentMessageType) && !(parentMessage?.thumbnails?.length > 0)) && (
              <>
                <video className="sendbird-quote-message__replied-message__thumbnail-message__video">
                  <source src={parentMessageUrl} type={parentMessageType} />
                </video>
                <div className="sendbird-quote-message__replied-message__thumbnail-message__cover">
                  <div className="sendbird-quote-message__replied-message__thumbnail-message__cover__icon">
                    <Icon
                      type={IconTypes.PLAY}
                      fillColor={IconColors.ON_BACKGROUND_2}
                      width="14px"
                      height="14px"
                    />
                  </div>
                </div>
              </>
            )}
            {(isThumbnailLoaded && isGif(parentMessageType)) && (
              <div className="sendbird-quote-message__replied-message__thumbnail-message__cover">
                <div className="sendbird-quote-message__replied-message__thumbnail-message__cover__icon">
                  <Icon
                    type={IconTypes.GIF}
                    fillColor={IconColors.ON_BACKGROUND_2}
                    width="14px"
                    height="14px"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        {/* file message */}
        {(isFileMessage(parentMessage) && !isSupportedFileView(parentMessage.type) && parentMessageUrl) && (
          <div className="sendbird-quote-message__replied-message__file-message">
            <Icon
              className="sendbird-quote-message__replied-message__file-message__type-icon"
              type={{
                [uikitFileTypes.IMAGE]: IconTypes.PHOTO,
                [uikitFileTypes.VIDEO]: IconTypes.PLAY,
                [uikitFileTypes.AUDIO]: IconTypes.FILE_AUDIO,
                [uikitFileTypes.GIF]: IconTypes.GIF,
                [uikitFileTypes.OTHERS]: IconTypes.FILE_DOCUMENT,
              }[getUIKitFileType(parentMessageType)]}
              fillColor={IconColors.ON_BACKGROUND_3}
              width="16px"
              height="16px"
            />
            <Label
              className="sendbird-quote-message__replied-message__file-message__file-name"
              type={LabelTypography.BODY_2}
              color={LabelColors.ONBACKGROUND_3}
            >
              {truncateString(splitUrl[splitUrl.length - 1])}
            </Label>
          </div>
        )}
      </div>
    </div>
  );
}
