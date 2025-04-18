import { Box, List, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo3.png";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { TUserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.services";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box component={Link} href={"/"}>
      <Stack sx={{ width: 80, height: 65, marginLeft: 3, paddingTop: 1 }}>
        <Image
          src={logo}
          alt="doctor3"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Stack>
      <List>
        {drawerItems(userRole as TUserRole).map((item, index) => (
          <SidebarItem item={item} key={index} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
