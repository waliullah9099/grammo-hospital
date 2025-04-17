"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import logo from "@/assets/logo3.png";
import { Box, Container, Stack, Typography } from "@mui/material";
// import AuthButton from "@/components/UI/AuthButton/AuthButton";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );
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
          </Stack>

          <AuthButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
