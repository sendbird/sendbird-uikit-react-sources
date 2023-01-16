import React from "react";
import { NotficationChannelContextProps, NotficationChannelProvider } from "./context/NotificationChannelProvider";
import NotificationChannelUI, { NotificationChannelUIProps } from "./components/NotificationChannelUI";

export interface NotificationChannelProps extends NotificationChannelUIProps, NotficationChannelContextProps {}
export default function NotificationChannel(props: NotificationChannelProps) {
  const {
    channelUrl,
    messageListParams,
    lastSeen,
    handleWebAction,
    handleCustomAction,
    hanlePredefinedAction,
    ...uiProps
  } = props;
  return (
    <NotficationChannelProvider
      channelUrl={channelUrl}
      lastSeen={lastSeen}
      messageListParams={messageListParams}
      handleWebAction={handleWebAction}
      handleCustomAction={handleCustomAction}
      hanlePredefinedAction={hanlePredefinedAction}
    >
      <NotificationChannelUI
        {...uiProps}
      />
    </NotficationChannelProvider>
  )
}
