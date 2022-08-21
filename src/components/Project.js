import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import styles from "./css/styles.module.css";
import {
  backgroundColor1,
  backgroundColor2,
  textColor1,
  textColor2,
} from "./css/ColorScheme";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
} from "@mui/material";

import projects from "../db/projects.json";
import gardenista from "../images/gardenista.png";
import pokedex from "../images/pokedex.jpg";
import gaitspeed from "../images/gaitspeed.jpg";
import readme from "../images/readmegenerator.jpg";
import notetaker from "../images/Note_Taker.gif";
import ecommerce from "../images/ecommerceserver.gif";

export default function App() {
  const [open, set] = useState(false);
  const [text, setText] = useState("Welcome to my Project Page!");

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%" },
    to: {
      size: open ? "100%" : "20%",
      display: open ? "grid" : "block",
      padding: open ? 25 : 0,
      cursor: open ? "auto" : "pointer",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? projects.projects : [], {
    ref: transApi,
    trail: open ? 200 : 600 / projects.projects.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
    onStart: () => {
      setText("");
    },
    onDestroyed: () => {
      setText("Welcome to my Project Page!");
    },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0.5,
    open ? 0.1 : 0.6,
  ]);

  const renderimg = (item) => {
    switch (item) {
      case "gardenista":
        return gardenista;
      case "pokedex":
        return pokedex;
      case "gaitspeed":
        return gaitspeed;
      case "readme":
        return readme;
      case "notetaker":
        return notetaker;
      case "ecommerce":
        return ecommerce;
      default:
        return "";
    }
  };

  return (
    <Box
      className={styles.wrapper}
      style={{
        backgroundColor: backgroundColor2,
        display: open ? "block" : "flex",
      }}
      id="Project"
    >
      {open ? <Button onClick={() => set(false)}>Minimize</Button> : null}
      <animated.div
        style={{
          ...rest,
          height: size,
          background: backgroundColor1,
          color: textColor1,
        }}
        className={styles.container}
        onClick={() => set(true)}
      >
        {text === "" ? null : (
          <div
            style={{
              justifyContent: "center",
            }}
          >
            <h2>Click Here to View My Project!</h2>
          </div>
        )}

        {transition((style, item) => (
          <animated.div
            className={styles.item}
            style={{
              ...style,
              background: item,
            }}
          >
            {/*mobile: card display: "block"*/}
            {/*mobile: img width: "100%"*/}
            <Card
              sx={{
                display: { sm: "block", md: "flex" },
                color: textColor2,
                height: { sm: "100%", md: "400px" },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { sm: "100%", md: "50%" },
                  objectFit: "fill",
                }}
                image={renderimg(item.image)}
                alt={item.name}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { sm: "100%", md: "50%" },
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    {item.description}
                  </Typography>
                  <Box sx={{ textAlign: "left", p: { sm: 1, md: 3 }, pt: 1 }}>
                    <Typography variant="h5">
                      Skill use in this project:
                    </Typography>
                    {item.skills.map((skill) => {
                      return <Chip key={skill} label={skill} sx={{ m: 0.5 }} />;
                    })}
                  </Box>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 2,
                    backgroundColor: backgroundColor1,
                  }}
                >
                  <Button
                    variant="contained"
                    href={item.github}
                    sx={{
                      backgroundColor: textColor1,
                      m: item.deploy !== "" ? 1 : 0,
                    }}
                    target="_blank"
                  >
                    Github
                  </Button>
                  {item.deploy !== "" ? (
                    <Button
                      variant="contained"
                      href={item.deploy}
                      sx={{ backgroundColor: textColor1, m: 1 }}
                      target="_blank"
                    >
                      Deploy
                    </Button>
                  ) : null}
                </Box>
              </Box>
            </Card>
          </animated.div>
        ))}
      </animated.div>
    </Box>
  );
}
