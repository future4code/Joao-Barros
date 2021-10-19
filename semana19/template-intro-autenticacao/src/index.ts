import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {login} from './endpoints/login'

app.post('/users/signup', createUser)
app.put('/users/:id', login)
app.put('/users/:id', editUser)