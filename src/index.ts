import express, { Request, Response } from "express";
import cors from "cors";

import { Sender } from "./client/sender";

const sender = new Sender();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/status", (request: Request, response: Response) => {
  return response
    .status(200)
    .send({ qrCode: sender.qrCode, connected: sender.isConnected });
});

app.post("/message", async (request: Request, response: Response) => {
  const { content, groupName } = request.body;

  try {
    await sender.sendMessageGroup(groupName, content);

    return response
      .status(200)
      .send({ error: false, data: [], message: "Message succefully sent" });
  } catch (error) {
    console.error(error);

    return response
      .status(500)
      .send({ error: true, data: [], message: "Unable to send message" });
  }
});

app.listen(3333, () => console.log("⚡ Server open and running"));
