import io, { Socket } from 'socket.io-client';

const SERVER_URL = 'https://theajou.shop:4000';
const PORT = '4000';

export default class ClientSocket {
  socket: Socket | undefined;

  static sendPC: RTCPeerConnection;

  static receivePC: RTCPeerConnection;

  // eslint-disable-next-line no-use-before-define
  static instance: ClientSocket | null;

  constructor(id: string) {
    // eslint-disable-next-line no-constructor-return
    if (ClientSocket.instance) return ClientSocket.instance;
    this.connect();
    ClientSocket.instance = this;
    this.setUid(id);
  }

  connect() {
    this.socket = io(`${SERVER_URL}:${PORT}`, { transports: ['websocket'] });
  }

  setUid(id: string) {
    this.socket?.emit('setUid', id);
  }
}
