import { BrowserWindow, IpcMainEvent, dialog } from "electron";

const getOpenDirectoryDialog = (browserWindow: BrowserWindow) => {
  return async (_event: IpcMainEvent, _arg: any[]) => {
    const { canceled, filePaths } = await dialog.showOpenDialog(browserWindow, {
      title: "Select Working Directory", // Dialog title
      properties: ["openDirectory"], // Specify that it's an open file dialog
    });

    console.log(canceled, filePaths);
    _event.reply("get:openFile", canceled ? "" : filePaths[0])
  }
}

export { getOpenDirectoryDialog };
