import { Timestamp } from "firebase/firestore"

export interface IParams {
    page: string
    id: string
}

export interface ILogin {
    role: string
    email: string
    password: string
    remember: boolean
}

export interface IAuthorizedContract {
  id?: string
  name?: string
  number?: string
  ownership?: string
  person?: string
  validity?: number
  create_at?: string
}

export interface IExploitContract {
  id?: string
  number?: string
  name?: string
  create_at?: string
  effect_at?: string
  expire_at?: string
  validity?: number
}

export interface IAuthorizedSong {
  id?: string
  name?: string
  code?: string
  singer?: string
  artist?: string
  status?: number
  downloadDate?: string
}