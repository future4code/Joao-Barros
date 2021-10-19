import { sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from "dotenv"

export class Authenticator{
  public generateToken = (
    payload: authenticationData
  )=>{
    
    const token = sign(
      payload,
      process.env.JWT_KEY,
      { expiresIn: "10h" }
    )

    return token
  }

  public getTokenData = (
    token: string,
  ): authenticationData | null => {
    try {
      const tokenData = verify(
        token,
        process.env.JWT_KEY
      ) as authenticationData;

      return {
        id: tokenData.id
      }

    } catch (error) {
      console.error(error)
      return null;
    }
  }
}
