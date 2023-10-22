import { BrowserWindow, IpcMainEvent } from "electron";
import { simpleGit, StatusResult, SimpleGitOptions } from "simple-git";

const getStatus = (browserWindow: BrowserWindow) => {
  return async (_event: IpcMainEvent, _arg: any) => {
    if (_arg?.cwd === undefined) return;

    const options: Partial<SimpleGitOptions> = {
      baseDir: _arg.cwd,
      binary: "git",
      maxConcurrentProcesses: 6,
      trimmed: false,
    };
    const { modified }: StatusResult = await simpleGit(options)
      .status()
      .then((data) => {
        return data;
      });

    _event.reply("get:git-status", modified);
  };
};

export { getStatus };
