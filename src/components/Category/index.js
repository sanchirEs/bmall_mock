import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import {House , Dress, Baby, Desktop, ForkKnife, Basketball, AirplaneTilt, Pill   }from "@phosphor-icons/react";

const data = [
  { icon: <House  />, label: "Гэр ахуй" },
  { icon: <Dress />, label: "Хувцас" },
  { icon: <Baby />, label: "Хүүхэд" },
  { icon: <Desktop  />, label: "Технологи" },
  { icon: <ForkKnife />, label: "Хүнс" },
  { icon: <Basketball  />, label: "Спорт" },
  { icon: <AirplaneTilt  />, label: "Аялал" },
  { icon: <Pill  />, label: "Гоо сайхан" },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 20,
    paddingRight: 48,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 20,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function Category() {
  return (
    <Box sx={{ display: "absolute" }}>
      <Paper elevation={0} sx={{ maxWidth: 270 }}>
        <FireNav component="nav" disablePadding>
          <Box sx={{ bgcolor:"rgb(255, 255, 255)" , pb: 0}}>
            {data.map((item) => (
              <ListItemButton
                key={item.label}
                sx={{
                  display: "flex",
                  alignitems: "center",
                  height: 58.8,
                  color: "black",
                  width: 270
                }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#424852", textAlign: "left" }}
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 17,
                    fontWeight: "medium",
                  }}
                />
                <Divider  />
              </ListItemButton>
              
            ))}
          </Box>
        </FireNav>
      </Paper>
    </Box>
  );
}
