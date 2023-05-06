export interface IUserEntry {
  data: IData
  authResult: IAuthResult
  resultStat: IResultStat
}

export interface IData {
  name: string
  lastName: string
  isFemale: boolean
  address: string
  email: string
  password: string
}

export interface IAuthResult {
  accessToken: string
  expiresIn: number
}

export interface IResultStat {
  ok: boolean
}
