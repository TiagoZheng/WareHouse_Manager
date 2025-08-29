import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

const MainMenu = () => {
  // To toggle on and off the menu sidebar TODO button
  
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  {/* Items In the Menu */}
  const mainMenuList = (
    <div>
      <h1 className="font-bold text-center m-8">Main Menu</h1>
      <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
        <List>
          <ListItemButton>
            <ListItemText primary="Dashboard"></ListItemText>
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Inventory"></ListItemText>
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
    </div>
  );

  return (
    <div className="flex">
      <Drawer variant="permanent" className="w-62">
        {mainMenuList}
      </Drawer>
    </div>
  );
};

export default MainMenu;
