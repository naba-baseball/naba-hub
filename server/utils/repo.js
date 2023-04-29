import * as fs from 'node:fs/promises'
import { simpleGit } from 'simple-git'

export async function clearExistingRepo(path) {
  try {
    await fs.rm(path, { recursive: true, force: true })
  }
  catch (err) {
    console.error('error clearing repo directory', err)
  }
}

export async function cloneRepo(token, path) {
  try {
    await simpleGit().clone(
      `https://${token}@github.com/twitch0125/naba-dump.git`,
      path,
    )
  }
  catch (err) {
    console.error('error cloning repo', err)
  }
}
