import { Whatsapp, create, SocketState } from "venom-bot";
import { GroupInfo } from "../interfaces/group.interface";

interface Groups {
  groupName: string;
  groupId: {
    server: string;
    user: string;
    _serialized: string;
  };
}

export type QRCode = {
  base64Qr: string;
};

export class Sender {
  private client: Whatsapp;
  private connected: boolean;
  private qr: QRCode;

  get isConnected(): boolean {
    return this.connected;
  }

  get qrCode(): QRCode {
    return this.qr;
  }

  constructor() {
    this.boostrap();
  }

  async sendMessageGroup(groupName: string, body: string) {
    // @ts-ignore
    const groups: Groups[] = (await this.client.getAllChatsGroups()).map(
      // @ts-ignore
      (group: GroupInfo) => {
        return {
          groupName: group.name,
          groupId: group.id,
        };
      }
    );

    const groupSend = groups.find((group) => group?.groupName === groupName);

    await this.client.sendText(groupSend?.groupId._serialized as string, body);
  }

  private boostrap() {
    const qr = (base64qrimg: string) => {
      this.qr = { base64Qr: base64qrimg };
    };

    const status = (statusSession: string) => {
      this.connected = ["isLogged", "qrReadSuccess", "chatsAvailable"].includes(
        statusSession
      );
    };

    const start = (client: Whatsapp) => {
      this.client = client;

      client.onStateChange((state) => {
        this.connected = state === SocketState.CONNECTED;
      });
    };

    create("ws-sender", qr, status)
      .then((client) => start(client))
      .catch((error) => console.error(error));
  }
}
