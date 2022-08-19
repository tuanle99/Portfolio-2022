import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import aboutmeimage from "../images/webdeveloper.jpeg";

export default function About() {
  return (
    <Grid
      container
      id="About"
      sx={{
        flex: 1,
      }}
    >
      <Grid item xs={12} sm={6} sx={{ padding: 10 }}>
        <img src={aboutmeimage} alt="Web developer" />
      </Grid>
      <Grid item xs={12} sm={6} sx={{}}>
        <Box sx={{ width: "80%", padding: 5 }}>
          <Typography variant="h4">Roses Are Red</Typography>
          <Typography variant="h4">Violet Are Blue,</Typography>
          <Typography variant="h4">Unexpected {"'{'"} On Line 32</Typography>
          <Typography variant="subtitle1" sx={{ paddingTop: 2 }}>
            I am a detail-oriented undergraduate who like to be as efficient as
            possible when creating a working reliable software. Whether working
            on academic or professional projects, I apply proven
            problem-solving, teamwork and communications skills.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
