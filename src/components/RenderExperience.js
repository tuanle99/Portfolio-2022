import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { RingLoader } from "react-spinners";

import Fade from "../components/Fade";
import experienceData from "../db/experience.json";

export default function RenderExperience() {
  const experience = experienceData.work_experience;

  return (
    <Box>
      {experience.map((e) => {
        return (
          <Grid
            container
            sx={{
              display: "flex",
            }}
            key={e.date}
          >
            <Grid
              item
              md={5}
              xs={12}
              sx={{
                textAlign: { md: "right" },
                p: 2,
                display: { md: "block", xs: "none" },
              }}
            >
              <Fade direction="left">
                <Typography variant="h5">{e.title}</Typography>
                <Typography variant="subtitle1">{e.date}</Typography>
              </Fade>
            </Grid>
            <Grid
              item
              md={1}
              sx={{
                display: { md: "flex", xs: "none" },
                justifyContent: "center",
              }}
            >
              <Divider orientation="vertical" flexItem>
                <RingLoader size={30} />
              </Divider>
            </Grid>

            <Grid item md={6} xs={12} sx={{ textAlign: { md: "left" }, p: 2 }}>
              <Fade direction="right">
                <Typography variant="h4">{e.company}</Typography>
                <Grid
                  item
                  md={5}
                  xs={12}
                  sx={{
                    textAlign: { md: "right" },
                    p: 2,
                    display: { md: "none", xs: "block" },
                  }}
                >
                  <Fade direction="left">
                    <Typography variant="h5">{e.title}</Typography>
                    <Typography variant="subtitle1">{e.date}</Typography>
                  </Fade>
                </Grid>
                {e.task.map((x) => {
                  return (
                    <Box key={x} sx={{ textAlign: { xs: "left" } }}>
                      <Typography key={x} variant="subtitle1">
                        - {x}
                      </Typography>
                    </Box>
                  );
                })}
              </Fade>
              <Box
                sx={{
                  display: { md: "none", sm: "flex" },
                }}
              >
                <Divider sx={{ color: "black" }} />
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}
