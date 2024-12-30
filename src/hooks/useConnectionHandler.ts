
import { useState } from 'react';
import { ConnectionHandler, ConnectionState } from '@sendbird/chat';
import useSendbirdStateContext from './useSendbirdStateContext'
import uuidv4 from '../utils/uuid';

export const useConnectionState = (): ConnectionState => {
  const { stores } = useSendbirdStateContext();
  const { sdkStore } = stores;
  const { sdk } = sdkStore;

  const [connectionState, setConnectionState] = useState(sdk.connectionState)
  sdk.addConnectionHandler(uuidv4(), new ConnectionHandler({
    onConnected: () => setConnectionState(ConnectionState.OPEN),
    onDisconnected: () => setConnectionState(ConnectionState.CLOSED),
    onReconnectStarted: () => setConnectionState(ConnectionState.CONNECTING),
    onReconnectSucceeded: () => setConnectionState(ConnectionState.OPEN),
    onReconnectFailed: () => setConnectionState(ConnectionState.CLOSED),
  }))
  return connectionState
}