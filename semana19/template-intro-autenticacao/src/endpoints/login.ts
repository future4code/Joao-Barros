import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export const login = async (
  req: Request,
  res: Response
) => {
  try {

    const { email, password } = req.body

    const [user] = await connection("to_do_list_users")
    .where({email})

    if (!user || user.password !== password) {
      res.statusCode = 401
      throw new Error("Credenciais invalidas")
    }

    const token = new Authenticator().generateToken({
      id: user.id
    })

    res.send({ token })

  } catch (error) {
    if (res.statusCode === 200) {
      res.status
    }
  }
}