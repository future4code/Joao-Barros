import express, { Request, Response } from "express";
import cors from "cors";

type User = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

enum UserType {
  admin = "ADMIN",
  normal = "NORMAL",
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.admin,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.normal,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.normal,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.normal,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.admin,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.admin,
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});

// exercicio 1
// a - Devo utilizar o metodo GET.
// b - Indicaria a entidade como '/users'.

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const name: string = (req.query.name as string) || "";
    const result = users.filter((user) => user.name.includes(name));
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// exercicio 2
// a - Passei como string porque eles sao texto.
// b - Posso criar um enum para os types.

app.get("/users/:type", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const type: string = req.params.type;
    const result = users.filter((user) => user.type.includes(type));
    if (!result) {
      errorCode = 404;
      throw new Error("Invalid type");
    }
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// exercicio 3
// a - Path parameters

app.get("/users", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const name: string = req.query.name as string;
    const user: User | undefined = users.find((user) => user.name === name);
    if (!user) {
      codeError = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
});

// exercicio 4
// a - Se mudamos o metodo para PUT ele edita o dado no backend.
// b - O metodo PUT serve para edicao de valores, para adicionar novos dados devemos usar o POST.

app.post("/users", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const {id, name, email, type, age} = req.body;

    if (!id || !name || !email || !type || !age) {
      codeError = 422;
      throw new Error("Please, check body fields.")
    }
    const newUser: User = {
      id, name, email, type, age
    }
    users.push(newUser);
    res.status(201).send({ message: "User created successfully"})
  } catch (error: any) {
    res.status(codeError).send({ message: error.message})
  }
})