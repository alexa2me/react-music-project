import React, { useEffect, useContext } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { CardsContainer, Title, ContentContainer } from "./styled";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "90%",
    margin: "0 auto",
    textOverflow: "scroll",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr",
    width: "100%",
  },
  cover: {
    width: 151,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const HomePage = () => {
  useProtectedPage();
  const { states, setters } = useContext(GlobalStateContext);
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    setters.setIsUpdate(true);
    if (states.songs.length) {
    }
  }, [states.songs]);

  const songCards =
    states.songs.length === 0 ? (
      <p>You still didn't add any song</p>
    ) : (
      states.songs.map((song) => {
        return (
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  variant="h7"
                  noWrap
                  rowStyle={{ marginBottom: "0.5rem" }}
                >
                  {song.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="h5"
                  variant="h7"
                  noWrap
                >
                  {song.author}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon className={classes.playIcon} />
                </IconButton>
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image="https://i.scdn.co/image/ab67616d0000b2732160c02bc56f192df0f4986b"
              title="Song image"
            />
          </Card>
        );
      })
    ); /*: (
      <Loading />
    );*/

  return (
    <div>
      <Header />
      <ContentContainer>
        <Title>My songs</Title>
        <CardsContainer>{songCards} </CardsContainer>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default HomePage;
