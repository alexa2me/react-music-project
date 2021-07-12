import React, { useState } from "react";
import { InputContainer, FormTextContainer, AddSongButton } from "./styled";
import { TextField, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/useForm";
// import { createSong } from "../../services/song";

const AddPostsForm = () => {
  const [form, onChange, clear] = useForm({ title: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  //   const onSubmitForm = (e) => {
  //     e.preventDefault();
  //     // createSong(form, clear, setIsLoading);
  //   };

  return (
    <form /*onSubmit={onSubmitForm}*/>
      <InputContainer>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Título do seu post"}
          variant={"outlined"}
          margin={"dense"}
          type={"text"}
          multiline={true}
          rowsMax={"3"}
          required
          fullWidth
        />
        <FormTextContainer>
          <TextField
            name={"text"}
            value={form.text}
            onChange={onChange}
            label={""}
            margin={"dense"}
            variant={"outlined"}
            type={"text"}
            required
            rows={"4"}
            multiline={true}
            fullWidth
          />
        </FormTextContainer>
        <AddSongButton type={"submit"}>
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Postar</>
          )}
        </AddSongButton>
      </InputContainer>
    </form>
  );
};

export default AddPostsForm;
