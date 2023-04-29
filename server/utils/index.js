import * as dotenv from 'dotenv'
import { clearExistingRepo, cloneRepo } from './repo.js'
dotenv.config()
const LOCAL_PATH = `${process.cwd()}/repo`

export async function setupRepo() {
  console.log('clearing repo directory')
  await clearExistingRepo(LOCAL_PATH)
  console.log('cleared repo directory')
  console.log('cloning repo')
  await cloneRepo(process.env.GITHUB_ACCESS_TOKEN, LOCAL_PATH)
  console.log('repo cloned successfully')
  console.log('done!')
}
