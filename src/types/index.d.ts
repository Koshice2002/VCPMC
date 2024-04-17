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
  create_at?: Timestamp
  person_create?: string
}

export interface IBroadcast {
  id?: string
  name?: string
  playlist?: string[]
  create_at?: Timestamp
  expire_at?: Timestamp
}

export interface IDevice {
  id?: string
  name?: string
  unit?: string
  image?: string
  skuID?: string
  memory?: string
  address?: string
  status?: boolean
  username?: string
  macAddress?: string
  expire_at?: Timestamp
}

export interface IPartner {
  id?: string
  name?: string
  email?: string
  role?: string
  phone?: string
  status?: string
  expire_at: Timestamp
}

export interface IUnitUsed {
  id?: string
  name?: string
  admin?: string
  role?: string
  phone?: string
  status?: string
  expire_at: Timestamp
}