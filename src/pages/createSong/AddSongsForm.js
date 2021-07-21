import React, { useState, useContext } from "react";
import { InputContainer, AddSongButton } from "./styled";
import { TextField, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { createSong } from "../../services/createSong";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddSongsForm = () => {
  const [form, onChange, clear] = useForm({
    title: "",
    date: "",
    file: "",
    genre: [],
    album: "",
  });

  const history = useHistory();
  const classes = useStyles();
  const { states, requests } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = async () => {
    window.event.preventDefault();

    const result = await createSong(form, clear, setIsLoading);
    if (result.status) {
      clear();
      setIsLoading(false);
      alert("Song added successfully!");
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <InputContainer>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Title"}
          variant={"outlined"}
          margin={"dense"}
          type={"text"}
          required
          fullWidth
        />

        <TextField
          name={"date"}
          value={form.date}
          onChange={onChange}
          label={"Release Date"}
          variant={"outlined"}
          margin={"dense"}
          type={"text"}
          required
          fullWidth
        />
        <TextField
          name={"file"}
          value={form.file}
          onChange={onChange}
          label={"File"}
          variant={"outlined"}
          margin={"dense"}
          type={"text"}
          required
          fullWidth
        />

        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre"
            name="genre"
            multiple
            value={form.genre}
            onChange={onChange}
            input={<Input />}
            MenuProps={MenuProps}
          >
            {states.genres.length > 0 &&
              states.genres.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <TextField
          name={"album"}
          value={form.album}
          onChange={onChange}
          label={"Album"}
          variant={"outlined"}
          margin={"dense"}
          type={"text"}
          required
          fullWidth
        />
        <AddSongButton type={"submit"}>
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Create</>
          )}
        </AddSongButton>
      </InputContainer>
    </form>
  );
};

export default AddSongsForm;
