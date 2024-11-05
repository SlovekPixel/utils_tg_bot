import { config } from 'dotenv'


export default function getEnv(key: string, defaultValue = undefined): string {
  const envs = config().parsed
  if (!envs) throw new Error(`Environment variables is required but not set.`)

  const value = envs[key] ? envs[key] : defaultValue
  if (!value) throw new Error(`Environment variable ${key} is required but not set.`)

  return value
}