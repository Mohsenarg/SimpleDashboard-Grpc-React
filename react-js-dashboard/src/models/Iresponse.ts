export interface IUserEntry {
  data: IData
  authResult: IAuthResult
  resultStat: IResultStat
}

export interface IData {
  Name: string
  LastName: string
  IsFemale: boolean
  Address: string
  Email: string
  Password: string
}

export interface IAuthResult {
  AccessToken: string
  ExpiresIn: number
}

export interface IResultStat {
  Ok: boolean
}
