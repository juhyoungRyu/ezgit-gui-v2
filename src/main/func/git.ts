import { simpleGit, StatusResult, SimpleGitOptions } from "simple-git";

export async function getStatus(cwd: string) {
  const options: Partial<SimpleGitOptions> = {
    baseDir: cwd,
    binary: "git",
    maxConcurrentProcesses: 6,
    trimmed: false,
  };

  const status: StatusResult = await simpleGit(options)
    .status()
    .then((data) => {
      return data;
    });

  return status;
}
