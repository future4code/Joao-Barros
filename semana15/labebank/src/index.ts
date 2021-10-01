import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

type User = {
  id: number;
  name: string;
  cpf: number;
  age: number;
  balance?: number;
  statement?: Spending[];
};

type Spending = {
  value: number;
  date: number;
  description: string;
};

type Transaction = {
  name: string;
  cpf: number;
  date: number;
  value: number;
};

const users: object[] = [
  {
    id: 1,
    name: "Joao",
    cpf: 12345678912,
    age: 28,
    balance: 100,
    statement: [
      {
        name: "Joao",
        cpf: 12345678912,
        date: 1632511504599,
        value: 50
      }
    ]
  }
];

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, age } = req.body;
    if (age < 18) {
      throw new Error("User must have more than 18 years.");
    }
    const createUser: User = {
      id: Date.now(),
      name,
      cpf,
      age,
      balance: 0,
    };
    users.push(createUser);
    return res.send(createUser);
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
});

app.get("/users", (req: Request, res: Response) => {
  try {
    if (!res) {
      throw new Error("Can not find users.");
    }
    const usersList = users.map((user) => user);
    res.send(usersList);
  } catch (err: any) {
    return res.status(404).send({ message: err.message });
  }
});

// app.get("/users/search", (req: Request, res: Response) => {
//   try {
//     const result = users.filter(
//       user => user.name.includes(req.query.name as string)
//   )
//   } catch (err: any) {

//   }
// })


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
