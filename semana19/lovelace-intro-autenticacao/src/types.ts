export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export interface authenticationData {
  id: string
  role: USER_ROLES
}

export interface user extends authenticationData {
   id: string
   email: string
   name: string
   nickname: string
   password:string
}