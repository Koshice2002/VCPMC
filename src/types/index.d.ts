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
  person?: string
  validity?: number
  create_at?: string
  ownership?: string
}

export interface IExploitContract {
  id?: string
  name?: string
  number?: string
  validity?: number
  create_at?: string
  effect_at?: string
  expire_at?: string
}

export interface IAuthorizedSong {
  id?: string
  name?: string
  code?: string
  type?: string
  image?: string
  format?: string
  singer?: string
  artist?: string
  status?: number
  duration?: string
  downloadDate?: Timestamp
}

export interface IPlaylist {
  id?: string
  name?: string
  songs?: string[]
  duration?: string
  person_create?: string
  create_at?: Timestamp
}