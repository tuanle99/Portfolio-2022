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
import aboutmeimage from "../images/webdeveloper.jpeg";
import basketball_gif from "../images/basketball_gif.gif";
import coding_gif from "../images/coding_gif.gif";
import ramen_gif from "../images/ramen_gif.gif";
import workout_gif from "../images/workout_gif.gif";

import { backgroundColor2, textColor2 } from "./ColorScheme";

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
        xs={12}
        sm={6}
        sx={{ padding: 6, textAlign: "center", objectFit: "contain" }}
      >
        <img src={aboutmeimage} alt="Web developer" />
      </Grid>
      <Grid item xs={12} sm={6} sx={{}}>
        <Box sx={{ width: "80%", padding: 5, textAlign: "left" }}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3">Roses Are Red</Typography>
            <Typography variant="h3">Violet Are Blue,</Typography>
            <Typography variant="h3">Unexpected {"'{'"}</Typography>
            <Typography variant="h3">On Line 32</Typography>
            <Typography variant="subtitle1" sx={{ paddingTop: 2 }}>
              I am a detail-oriented undergraduate who like to be as efficient
              as possible when creating a working reliable software. Whether
              working on academic or professional projects, I apply proven
              problem-solving, teamwork and communications skills.
            </Typography>
          </ThemeProvider>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={{}}>
        <Box sx={{ width: "80%", padding: 5, textAlign: "center" }}>
          <Typography variant="h3">A little bit about me</Typography>
          <Typography variant="subtitle1" sx={{ paddingTop: 2 }}>
            I enjoy a workout and playing basketball. Sweating is the best way
            to clear my head and energize me for the rest of the day. After
            sweating and burning valuable calories, I love to regenerate myself
            by devouring a bowl of ramen (my favorite comfort food). Outside of
            the court, gym, and ramen restaurant. I would put my creativity to
            work by working on different full-stack projects by creating react
            web applications.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
        <ImageList sx={{ width: 400, height: 350 }} cols={2} rowHeight={164}>
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
      </Grid>
    </Grid>
  );
}
