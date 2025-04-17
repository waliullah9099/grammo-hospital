"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo3.png";
import { getUserInfo } from "@/services/auth.services";
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );
  const userInfo = getUserInfo();
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
      }}
    >
      <Container>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ width: 90, height: 65 }}>
            <Image
              src={logo}
              alt="doctor3"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>

          <Stack direction="row" justifyContent="space-between" gap={4}>
            <Typography component={Link} href="/consultation" color="#ffffff">
              Consultation
            </Typography>

            <Typography color="#ffffff">Diagnostics</Typography>
            <Typography component={Link} href="/doctors" color="#ffffff">
              Doctors
            </Typography>
            {/* {userInfo?.userId ? (
              <Typography component={Link} href="/dashboard" color="#ffffff">
                Dashboard
              </Typography>
            ) : null} */}
          </Stack>

          <AuthButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
