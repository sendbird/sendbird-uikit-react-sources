import React, { ReactElement, useRef, useState } from 'react';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import { OpenChannel } from '@sendbird/chat/openChannel';

import { SendableMessageType } from '../../utils';
import { classnames, noop } from '../../utils/utils';
import useSendbirdStateContext from '../../hooks/useSendbirdStateContext';
import { MenuItems, getObservingId } from '../ContextMenu';
import { PrebuildMenuItemPropsType, TriggerIcon, TriggerIconProps } from './items';
import { ReplyType } from '../../types';
import {
  MenuConditionsParams,
  showMenuItemCopy,
  showMenuItemDelete,
  showMenuItemEdit,
  showMenuItemOpenInChannel,
  showMenuItemReply,
  showMenuItemResend,
  showMenuItemThread,
} from '../../utils/menuConditions';

import {
  CopyMenuItem,
  ReplyMenuItem,
  ThreadMenuItem,
  OpenInChannelMenuItem,
  EditMenuItem,
  ResendMenuItem,
  DeleteMenuItem
} from './items';
import { MessageMenuProvider } from './messageMenuContext';

type RenderMenuItemsParams = {
  items: {
    CopyMenuItem: (props: PrebuildMenuItemPropsType) => ReactElement;
    ReplyMenuItem: (props: PrebuildMenuItemPropsType) => ReactElement;
    ThreadMenuItem: (props: PrebuildMenuItemPropsType) => ReactElement;
    OpenInChannelMenuItem: (props: PrebuildMenuItemPropsType) => ReactElement;
    EditMenuItem: (props: PrebuildMenuItemPropsType) => ReactElement;
    ResendMenuItem: (props: PrebuildMenuItemPropsType) => ReactElement;
    DeleteMenuItem: (props: PrebuildMenuItemPropsType) => ReactElement;
  };
};
export interface MessageMenuProps {
  className?: string;
  message: SendableMessageType;
  channel: GroupChannel | OpenChannel | null;
  isByMe?: boolean;
  replyType?: ReplyType;
  renderTrigger?: (params: TriggerIconProps) => ReactElement;
  renderMenuItems?: (params: RenderMenuItemsParams) => ReactElement;
  disableDeleteMessage?: boolean;
  showEdit?: (bool: boolean) => void;
  showRemove?: (bool: boolean) => void;
  deleteMessage?: (message: SendableMessageType) => void;
  resendMessage?: (message: SendableMessageType) => void;
  setQuoteMessage?: (message: SendableMessageType) => void;
  onReplyInThread?: (props: { message: SendableMessageType }) => void;
  onMoveToParentMessage?: () => void;
}

export const MessageMenu = ({
  className,
  message,
  channel,
  isByMe,
  replyType,
  renderTrigger = TriggerIcon,
  renderMenuItems,

  disableDeleteMessage = null,
  showEdit = noop,
  showRemove = noop,
  deleteMessage,
  resendMessage,
  setQuoteMessage,
  onReplyInThread,
  onMoveToParentMessage,
}: MessageMenuProps) => {
  const { config } = useSendbirdStateContext();
  const { isOnline } = config;
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const [isMenuVisible, setMenuVisibility] = useState(false);
  const hideMenu = () => setMenuVisibility(false);
  const showMenu = () => setMenuVisibility(true);

  const params: MenuConditionsParams = {
    message,
    channel,
    isByMe,
    replyType,
    onReplyInThread,
    onMoveToParentMessage,
  };

  return (
    <div
      className={classnames('senbird-message-menu', className)}
      ref={containerRef}
    >
      <MessageMenuProvider value={{
        message,
        hideMenu,
        showMenu,
        setQuoteMessage,
        onReplyInThread,
        onMoveToParentMessage,
        showEdit,
        showRemove,
        deleteMessage,
        resendMessage,
        isOnline,
        disableDeleteMessage,
        triggerRef,
        containerRef,
      }}>
        {(renderTrigger({ ref: triggerRef, onClick: hideMenu }))}
        {isMenuVisible && (
          <MenuItems
            id={getObservingId(message.messageId)} // NOTE: To use the useElementObserver on the MessageContent
            parentRef={triggerRef}
            parentContainRef={containerRef}
            closeDropdown={hideMenu}
            openLeft={isByMe}
          >
            {renderMenuItems?.({
              items: {
                CopyMenuItem,
                ReplyMenuItem,
                ThreadMenuItem,
                OpenInChannelMenuItem,
                EditMenuItem,
                ResendMenuItem,
                DeleteMenuItem,
              },
            }) ?? (
                <>
                  {showMenuItemCopy(params) && <CopyMenuItem />}
                  {showMenuItemReply(params) && <ReplyMenuItem />}
                  {showMenuItemThread(params) && <ThreadMenuItem />}
                  {showMenuItemOpenInChannel(params) && <OpenInChannelMenuItem />}
                  {showMenuItemEdit(params) && <EditMenuItem />}
                  {showMenuItemResend(params) && <ResendMenuItem />}
                  {showMenuItemDelete(params) && <DeleteMenuItem />}
                </>
              )}
          </MenuItems>
        )}
      </MessageMenuProvider>
    </div>
  );
};
