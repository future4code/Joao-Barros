import { Request, Response } from "express";
import connection from "./connection";
import app from "./app";

// Esse arquivo seria o index.ts

app.get("/actors", async (req, res) => {
  try {
    const actors = await connection("Actor");
    res.send(actors);
  } catch (err: any) {
    console.log(err);
    res.status(500).send(err.sqlMessage || err.message);
  }
});

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// app.post("/actor", async (req: Request, res: Response) => {
//   try {
//     await createActor(
//       req.body.id,
//       req.body.name,
//       req.body.salary,
//       new Date(req.body.dateOfBirth),
//       req.body.salary
//     );

//     res.status(200).send();
//   } catch (err: any) {
//     res.status(400).send({
//       message: err.message,
//     });
//   }
// });

// app.get("/actors?gender=", async (req: Request, res: Response) => {
//   try {
//     const count = await countActors(req.query.gender as string);
//     res.status(200).send({
//       quantity: count,
//     });
//   } catch (err: any) {
//     res.status(400).send({
//       message: err.message,
//     });
//   }
// });



app.delete("/actor/:id", async (req, res) => {
  try {
    await connection("Actor").delete().where({
      id: req.params.id,
    });
    res.status(204).end();
  } catch (err: any) {
    console.log(err);
    res.status(500).send(err.sqlMessage || err.message);
  }
});

// app.put("/actor/:id", async (req, res) => {
//   try {
//     await connection("Actor")
//       .update({
//         name: req.body.actor.name,
//         salary: req.body.actor.salary,
//         gender: req.body.actor.gender,
//         birth_date: req.body.birthDate,
//       })
//       .where({
//         id: req.params.id,
//       });
//   } catch (err: any) {
//     res.status(500).send(err.sqlMessage || err.message);
//   }
// });


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

  return result[0];
};

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `);
  return result[0][0];
};

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
  // o valor no resultado!
  const count = result[0][0].count;
  return count;
};

// countActors("male")
//   .then((result: any) => {
//     console.log(result);
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });

// searchActor("Ingrid Guimarães")
//   .then((result: any) => {
//     console.log(result);
//   })
//   .catch((err: any) => {
//     console.log(err);
//   });

// Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001"));
// })();

const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

// updateActor("003", 500);

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

// deleteActor("005");

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

avgSalary("female");

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
}); // bata no http://localhost:3003/users/001 e veja o que acontece no terminal
