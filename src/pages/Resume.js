import React from "react";
import { Box, Typography } from "@mui/material";

import RenderExperience from "../components/RenderExperience";
import RenderEducation from "../components/RenderEducation";

import { backgroundColor2, textColor2 } from "../css/Globalvar";

export default function Resume() {
  return (
    <Box
      id="Resume"
      sx={{
        backgroundColor: backgroundColor2,
        color: textColor2,
        textAlign: "center",
        p: 5,
      }}
    >
      <Typography variant="h3" sx={{ mb: 5 }}>
        Experience
      </Typography>
      <RenderExperience />
      <Typography variant="h3" sx={{ mb: 5, mt: 5 }}>
        Education
      </Typography>
      <RenderEducation />
    </Box>
  );
}
