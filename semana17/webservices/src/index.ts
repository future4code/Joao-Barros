import { config } from "dotenv";
import app from "./app";
import createUser from "./endpoints/createUser";
import { transporter } from "./services/mailTransporter";
import { getAddressInfo } from "./services/getAddressInfo"

config();

app.post("/users/signup", createUser);

getAddressInfo("01414-003")
  .then(console.log)
  .catch(console.error)

transporter.sendMail({
  from: process.env.NODEMAILER_USER,
  to: "lsd.omg1943@gmail.com",
  subject: "Mensagem de exemplo",
  text: "Este é um texto de exemplo",
  html: `
    <p>Exemplo em HTML</p>
    <button>GO</button>
  `,
})
  .then(console.log)
  .catch(console.log)
