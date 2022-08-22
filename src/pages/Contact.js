import React, { useRef } from "react";
import { Box, Grid, Typography, Link, TextField, Button } from "@mui/material";
import { FadeIn } from "react-slide-fade-in";
import emailjs from "@emailjs/browser";

import { LinkedIn, Place, Email, GitHub } from "@mui/icons-material/";

import {
  backgroundColor1,
  backgroundColor2,
  textColor1,
} from "../css/ColorScheme";

export default function Contact() {
  const form = useRef();
  const iconSize = 100;

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box id="Contact">
      <Box
        sx={{
          backgroundColor: backgroundColor1,
          color: textColor1,
          textAlign: "center",
          p: 6,
        }}
      >
        <FadeIn from="top" delayInMilliseconds={200} triggerOffset={0}>
          <Box>
            <Typography variant="h4">Contact</Typography>
            <Typography variant="h3">Let's Create a Connection</Typography>
          </Box>
          <Grid container spacing={2} mt={5}>
            <Grid item md={3} xs={12}>
              <Place sx={{ fontSize: iconSize }} />
              <Typography variant="h5">Atlanta, Georgia</Typography>
            </Grid>
            <Grid item md={3} xs={12}>
              <LinkedIn sx={{ fontSize: iconSize }} />
              <Typography variant="h5">Let's Connect</Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Email sx={{ fontSize: iconSize }} />
              <Typography variant="subtitle1">
                tuanleprofessional@gmail.com
              </Typography>
            </Grid>
            <Grid item md={3} xs={12}>
              <Link
                href="https://github.com/tuanle99"
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
            </Grid>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              backgroundColor: backgroundColor2,
              mt: 3,
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" sx={{ pt: 2 }}>
              Question? Leave me a message and I will get back to you as soon as
              possible!
            </Typography>
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                label="Name"
                name="name"
                sx={{ display: "flex", m: 2 }}
              />
              <TextField
                label="Subject"
                name="subject"
                sx={{ display: "flex", m: 2 }}
              />
              <TextField
                label="Message"
                name="message"
                sx={{ display: "flex", m: 2 }}
              />
              <Button type="submit" sx={{ m: 1 }}>
                Submit
              </Button>
            </form>
          </Grid>
        </FadeIn>
      </Box>
    </Box>
  );
}
