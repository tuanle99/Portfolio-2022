import React from "react";
import {
  Box,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Fade from "../components/Fade";
import aboutmeimage from "../images/webdeveloper.jpeg";
import basketball_gif from "../images/basketball_gif.gif";
import coding_gif from "../images/coding_gif.gif";
import ramen_gif from "../images/ramen_gif.gif";
import workout_gif from "../images/workout_gif.gif";

import { backgroundColor2, textColor2 } from "../css/Globalvar";
import personalinfo from "../db/personalinfo.json";

const imagesData = [
  {
    img: basketball_gif,
    title: "basketball gif",
  },
  {
    img: coding_gif,
    title: "coding gif",
  },
  {
    img: ramen_gif,
    title: "eating ramen gif",
  },
  {
    img: workout_gif,
    title: "workout gif",
  },
];

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "2.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};

export default function About() {
  return (
    <Grid
      container
      id="About"
      sx={{
        flex: 1,
        backgroundColor: backgroundColor2,
        color: textColor2,
      }}
    >
      <Grid
        item
        sm={12}
        md={6}
        sx={{ padding: 6, textAlign: "center", objectFit: "contain" }}
      >
        <Fade direction="top">
          <img src={aboutmeimage} alt="Web developer" />
        </Fade>
      </Grid>
      <Grid item sm={12} md={6} sx={{}}>
        <Fade direction="right">
          <Box sx={{ width: "100%", padding: 5, textAlign: "center" }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">Roses Are Red</Typography>
              <Typography variant="h3">Violet Are Blue,</Typography>
              <Typography variant="h3">
                Unexpected {"'{'"} On Line 32
              </Typography>

              <Typography variant="subtitle1" sx={{ paddingTop: 2 }}>
                {personalinfo.pitch}
              </Typography>
            </ThemeProvider>
          </Box>
        </Fade>
      </Grid>
      <Grid item sm={12} md={6} sx={{}}>
        <Fade direction="left">
          <Box sx={{ width: "100%", padding: 5, textAlign: "center" }}>
            <Typography variant="h3">A little bit about me</Typography>
            <Typography variant="subtitle1" sx={{ paddingTop: 2 }}>
              {personalinfo.about_me}
            </Typography>
          </Box>
        </Fade>
      </Grid>
      <Grid item sm={12} md={6}>
        <Fade direction="bottom">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageList
              sx={{ width: { sm: "100%", md: "50%" }, height: "100%" }}
              cols={2}
              rowHeight={180}
            >
              {imagesData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={item.img}
                    srcSet={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Fade>
      </Grid>
    </Grid>
  );
}
