enum StatusEventTypes {
  IsLogged = "isLogged",
  NotLogged = "notLogged",
  BrowserClose = "browserClose",
  QRReadSuccess = "qrReadSuccess",
  QRReadFail = "qrReadFail",
  AutocloseCalled = "autocloseCalled",
  DisconnectedMobile = "disconnectedMobile",
  DeleteToken = "deleteToken",
  ChatsAvailable = "chatsAvailable",
  DeviceNotConnected = "deviceNotConnected",
  ServerWssNotConnected = "serverWssNotConnected",
  NoOpenBrowser = "noOpenBrowser",
  InitBrowser = "initBrowser",
  OpenBrowser = "openBrowser",
  ConnectBrowserWs = "connectBrowserWs",
  InitWhatsapp = "initWhatsapp",
  ErrorPageWhatsapp = "erroPageWhatsapp",
  SuccessPageWhatsapp = "successPageWhatsapp",
  WaitForLogin = "waitForLogin",
  WaitChat = "waitChat",
  SuccessChat = "successChat",
}