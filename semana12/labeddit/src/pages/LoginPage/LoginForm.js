import React from "react";
import { InputsContainer,} from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import axios from "axios";
import {BASE_URL} from "../../constants/urls"

const LoginForm= () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const onSubmitForm = (event) => {
    event.preventDefault();
    login()
  };

  const login = () => {
    const headers = {
      headers: {
        ContentType: 'application/json'
      }
    }
    axios.post(`${BASE_URL}/users/login`, form, headers )
    .then((res) => console.log(res))
    .catch((res) => console.log (res))

  }


  return (
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"dense"}
            >
            Fazer Login
          </Button>
        </form>
      </InputsContainer>

  );
};

export default LoginForm;