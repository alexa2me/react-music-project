import { createTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "#ffffff",
    },
    text: {
      primary: neutralColor,
    },
  },
});

export default theme;
