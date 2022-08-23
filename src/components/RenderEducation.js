import React from "react";
import { Box, Typography } from "@mui/material";

import Fade from "./Fade";
import educationData from "../db/education.json";

export default function RenderEducation() {
  const education = educationData.education;

  const findIndex = (e) => {
    var index = education.findIndex(function (item, i) {
      return item.date === e;
    });

    if (index % 2 === 1) {
      return "left";
    } else {
      return "right";
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      {education.map((e) => {
        return (
          <Box key={e.date} sx={{ mt: 5 }}>
            <Fade direction={findIndex(e.date)}>
              <Typography variant="h4" sx={{ m: 1 }}>
                {e.degree}
              </Typography>
              <Typography variant="h5" sx={{ m: 1 }}>
                {e.school}
              </Typography>
              <Typography variant="subtitle1">{e.date}</Typography>
            </Fade>
          </Box>
        );
      })}
    </Box>
  );
}
