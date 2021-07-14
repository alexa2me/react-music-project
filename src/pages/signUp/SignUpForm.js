import React, { useState } from "react";
import { InputContainer } from "./styled";
import { TextField, Button, Box, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/useForm";
// import { signup } from "../../services/user";
import { useHistory } from "react-router-dom";

const SignUpForm = ({ setAccessButton }) => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (e) => {
    // e.preventDefault();
    // signup(form, clear, history, setAccessButton, setIsLoading);
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"username"}
          value={form.username}
          onChange={onChange}
          label={"Name"}
          margin={"dense"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
        />

        <TextField
          name={"nickname"}
          value={form.nickname}
          onChange={onChange}
          label={"Nickname"}
          margin={"dense"}
          variant={"outlined"}
          type={"text"}
          required
          fullWidth
        />

        <TextField
          name={"Email"}
          value={form.email}
          onChange={onChange}
          label={"Email"}
          margin={"dense"}
          variant={"outlined"}
          type={"email"}
          required
          fullWidth
        />

        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Password"}
          variant={"outlined"}
          margin={"dense"}
          type={"password"}
          required
          fullWidth
        />
        <Box mt={1}>
          <Button
            type={"submit"}
            variant={"contained"}
            color={"primary"}
            fullWidth
          >
            {isLoading ? (
              <CircularProgress color={"inherit"} size={24} />
            ) : (
              <> Sign up </>
            )}
          </Button>
        </Box>
      </form>
    </InputContainer>
  );
};

export default SignUpForm;
