import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo3.png";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { TUserRole } from "@/types";

const Sidebar = () => {
  const drawer = (
    <div>
      <List>
        {drawerItems("super_admin" as TUserRole).map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box component={Link} href={"/"}>
      <Stack sx={{ width: 80, height: 65, marginLeft: 3, paddingTop: 1 }}>
        <Image
          src={logo}
          alt="doctor3"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Stack>
      {drawer}
    </Box>
  );
};

export default Sidebar;
