import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const MainMenu = () => {
  // To toggle on and off the menu sidebar TODO button
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const mainMenuList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List>
        <ListItemButton>
          <ListItemText primary="Dashboard"></ListItemText>
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Product"></ListItemText>
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Warehouse"></ListItemText>
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Transfer Product"></ListItemText>
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Stock"></ListItemText>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div className="flex">
      <Drawer variant="permanent">{mainMenuList} </Drawer>
      <div className="flex-1">Hello THere</div>
    </div>
  );
};

export default MainMenu;
