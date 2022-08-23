import React, { useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import emailjs from "@emailjs/browser";

import { LinkedIn, Place, Email, GitHub } from "@mui/icons-material/";
import Fade from "../components/Fade";
import {
  backgroundColor1,
  backgroundColor2,
  textColor1,
} from "../css/Globalvar";

import personalinfo from "../db/personalinfo.json";

const theme = createTheme();

theme.typography.h5 = {
  fontSize: "1.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
};

export default function Contact() {
  const [sendMessage, setSendMessage] = useState("");
  const [sendError, setSendError] = useState(false);
  const form = useRef();
  const iconSize = 100;

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, subject, message } = e.target;

    if (name.value !== "" && subject.value !== "" && message.value !== "") {
      emailjs
        .sendForm(
          "service_7dxy7fy",
          "template_hn0vkch",
          form.current,
          "ajQO3mSzeRGSq_-s1"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSendError(false);
            setSendMessage("Your message has been sent successfully.");
            name.value = "";
            subject.value = "";
            message.value = "";
          },
          (error) => {
            console.log(error.text);
            setSendError(true);
            setSendMessage(
              "Please try again or email me directly at tuanleprofessional@gmail.com."
            );
          }
        );
    } else {
      setSendError(true);
      setSendMessage("Please fill in all the required fields.");
    }
  };

  return (
    <Box id="Contact">
      <Box
        sx={{
          backgroundColor: backgroundColor1,
          color: textColor1,
          textAlign: "center",
          p: { md: 6, xs: 4 },
        }}
      >
        <Fade direction="top">
          <Box>
            <Typography variant="h4">Contact</Typography>
            <Typography variant="h3">Let's Create a Connection</Typography>
          </Box>
        </Fade>
        <Grid container spacing={0} mt={2}>
          <Grid container item md={6} xs={12}>
            <Grid item md={6} xs={12} sx={{ m: { xs: 1, md: 0 } }}>
              <Fade direction="left">
                <Place sx={{ fontSize: iconSize }} />
                <Typography variant="h5">{personalinfo.location}</Typography>
              </Fade>
            </Grid>
            <Grid item md={6} xs={12} sx={{ m: { xs: 1, md: 0 } }}>
              <Fade direction="left">
                <Link
                  href={personalinfo.linkedin}
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  sx={{ color: textColor1 }}
                >
                  <LinkedIn sx={{ fontSize: iconSize }} />
                  <Typography variant="h5">Let's Connect</Typography>
                </Link>
              </Fade>
            </Grid>

            <Grid item md={6} xs={12} sx={{ m: { xs: 1, md: 0 } }}>
              <Fade direction="left">
                <Email sx={{ fontSize: iconSize }} />
                <Typography variant="subtitle1">
                  {personalinfo.email}
                </Typography>
              </Fade>
            </Grid>
            <Grid item md={6} xs={12} sx={{ m: { xs: 1, md: 0 } }}>
              <Fade direction="left">
                <Link
                  href={personalinfo.github}
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  sx={{ color: textColor1 }}
                >
                  <GitHub sx={{ fontSize: iconSize }} />
                  <Typography variant="subtitle1">
                    Check out my project
                  </Typography>
                </Link>
              </Fade>
            </Grid>
          </Grid>

          <Grid item md={6} xs={12}>
            <Fade direction="right">
              <Box
                sx={{
                  backgroundColor: backgroundColor2,
                  mt: 2,
                  borderRadius: 3,
                }}
              >
                <ThemeProvider theme={theme}>
                  <Typography variant="h5" sx={{ p: { md: 2, xs: 2 } }}>
                    Question? Leave me a message and I will get back to you as
                    soon as possible!
                  </Typography>
                </ThemeProvider>
                <form ref={form} onSubmit={sendEmail}>
                  <TextField
                    label="Name *"
                    name="name"
                    sx={{ display: "flex", m: 2 }}
                  />
                  <TextField
                    label="Subject *"
                    name="subject"
                    sx={{ display: "flex", m: 2 }}
                  />
                  <TextField
                    label="Message *"
                    name="message"
                    sx={{ display: "flex", m: 2 }}
                  />
                  {sendMessage === "" ? null : sendError ? (
                    <Typography sx={{ color: "red" }}>{sendMessage}</Typography>
                  ) : (
                    <Typography sx={{ color: "green" }}>
                      {sendMessage}
                    </Typography>
                  )}
                  <Button variant="contained" type="submit" sx={{ m: 1 }}>
                    Submit
                  </Button>
                </form>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
