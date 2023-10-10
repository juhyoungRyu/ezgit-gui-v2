import { ipcRenderer } from "electron";

export async function sendSelectDir(loadingState:boolean) {
  let result;

  // "../../electron/main/index.ts"로 요청
  ipcRenderer.send("selectDir");
  // 반환값 처리
  ipcRenderer.on("sendPath",(_, arg) => {
    console.log('reply:sendPath : ', arg)
    result = {path : arg, loading : loadingState}
  });

  return result
}