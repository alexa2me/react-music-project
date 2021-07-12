import React, { useContext } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AddSongsForm from "./AddSongsForm";

const PostListPage = () => {
  useProtectedPage();
  const history = useHistory();
  const { states, requests } = useContext(GlobalStateContext);

  return (
    <div>
      <Box
        display={"flex"}
        width={"60vw"}
        minWidth={"320px"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"0 auto"}
      >
        <AddSongsForm />
      </Box>
    </div>
  );
};

export default PostListPage;
