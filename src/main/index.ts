import { BrowserWindow, ipcMain } from "electron"
import { getOpenDirectoryDialog } from './func/electron'

const setMain = (window: BrowserWindow) => {
  // 여기부터 api 처리 로직 작성
  ipcMain.on("call:openFile", getOpenDirectoryDialog(window))
}

export { setMain }
