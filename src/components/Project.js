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
import { Box } from "@mui/system";

const data = [
  {
    name: "Rare Wind",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
  },
  {
    name: "Saint Petersburg",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
  {
    name: "Deep Blue",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height: 400,
  },
  {
    name: "Ripe Malinka",
    description: "#f093fb → #f5576c",
    css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    height: 400,
  },
];

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
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
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
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <Box
      className={styles.wrapper}
      style={{ backgroundColor: backgroundColor2 }}
      id="Project"
    >
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
            style={{ ...style, background: item.css }}
          >
            test
          </animated.div>
        ))}
      </animated.div>
    </Box>
  );
}
