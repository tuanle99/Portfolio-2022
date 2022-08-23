import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import styles from "../css/styles.module.css";
import {
  backgroundColor1,
  backgroundColor2,
  textColor1,
} from "../css/Globalvar";
import { Box, Button } from "@mui/material";

import projects from "../db/projects.json";
import Renderproject from "../components/RenderProject";

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
            <Renderproject item={item} />
          </animated.div>
        ))}
      </animated.div>
    </Box>
  );
}
