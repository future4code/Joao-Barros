import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const title = req.query.title;
      let sort = req.query.sort as string;
      let order = req.query.order as string;
      let page = Number(req.query.page);

      if (page < 1 || isNaN(page)) {
         page = 1;
      };
      const size = 10;
      const offset = size * (page - 1);

      console.log(req.query);

      if (title === "") {
         throw new Error("O valor de 'title' nao foi informado.")
      }

      if (sort !== "title" && sort !== "created_at") {
         sort = "title";
      }

      if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
         order = "ASC";
      }

      const result = await connection("aula49_recipes")
      .where('title', 'like', `%${title}%`)
      .orderBy(sort, order)
      .offset(offset);

      const recipes = result.map(toRecipe);

      if (recipes.length < 1) {
         throw new Error("Nao foram encontradas receitas com os valores enviados.")
      }

      res.status(200).send(recipes)

   } catch (error: any) {
      console.error(error.message);
      res.status(422).send({ message: error.message })
   }
}

const toRecipe = (input: any): recipe => {
   return input && {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}