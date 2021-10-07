import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getUserByName } from "./endpoints/getUserByName"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUserByType } from "./endpoints/getUserByType"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", getAllUsers);
app.get("/user-by-name", getUserByName);
app.get("/user-by-type", getUserByType);

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})