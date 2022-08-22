import React from "react";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import {
  backgroundColor1,
  backgroundColor2,
  textColor1,
  textColor2,
} from "../css/Globalvar";

import gardenista from "../images/gardenista.png";
import pokedex from "../images/pokedex.jpg";
import gaitspeed from "../images/gaitspeed.jpg";
import readme from "../images/readmegenerator.jpg";
import notetaker from "../images/Note_Taker.gif";
import ecommerce from "../images/ecommerceserver.gif";

export default function Renderproject({ item }) {
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
    <Card
      sx={{
        display: { sm: "block", md: "flex" },
        color: textColor2,
        height: "100%",
        justifyContent: "space-between",
        backgroundColor: backgroundColor1,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { sm: "100%", md: "49%" },
          objectFit: "fill",
          borderRadius: 1,
          maxHeight: 500,
        }}
        image={renderimg(item.image)}
        alt={item.name}
      />

      <Item item={item} />
    </Card>
  );
}

function Item({ item }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { sm: "100%", md: "49%" },
        backgroundColor: backgroundColor2,
        borderRadius: 1,
      }}
    >
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h4">
          {item.name}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {item.description}
        </Typography>
        <Box sx={{ textAlign: "left", p: { sm: 1, md: 3 }, pt: 1 }}>
          <Typography variant="h5">
            Technologies use in this project:
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
  );
}
