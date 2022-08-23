import React from "react";
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";

import { useWindowDimensions } from "../util/Helper";
import { backgroundColor2, textColor2 } from "../css/Globalvar";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};

export default function Home() {
  const { height, width } = useWindowDimensions();
  const backgroundHeight = height * 0.8;
  return (
    <Box
      id="Home"
      sx={{
        height: backgroundHeight,
        backgroundColor: backgroundColor2,
        color: textColor2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Full-Stack Developer</Typography>
      </ThemeProvider>
    </Box>
  );
}
