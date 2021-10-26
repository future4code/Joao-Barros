import { Request, Response } from "express"
import selectAllUsers from "../querys/selectAllUsers"
import {user} from "../types"
import {connection} from "../data/connection"

export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await selectAllUsers()

      const name = req.query.name;

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      const result = await connection("aula49_exercicio")
      .where('name', 'like', `%${name}%`);


      const filteredUsers = result.map(toUsers);

      res.status(200).send(filteredUsers)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

const toUsers = (input: any): user => {
   return input && {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type
   }
}