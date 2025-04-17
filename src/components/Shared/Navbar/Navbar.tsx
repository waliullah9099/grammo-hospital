"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo3.png"
import Image from "next/image";


const Navbar = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    // logoutUser(router);
  };

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
          {/* <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          Tahar{" "}
            <Box component="span" color="#ffffff">
             Medical
            </Box>{" "}
             Center
          </Typography> */}

<Box sx={{ width: 90, height: 65 }}>
  <Image
    src={logo}
    alt="doctor3"
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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

            {userInfo?.userId ? (
              <Typography component={Link} href="/dashboard" color="#ffffff">
                Dashboard
              </Typography>
            ) : null}
          </Stack>

          {userInfo?.userId ? (
            <Button color="error" onClick={handleLogOut} sx={{ boxShadow: 0 }}>
              Logout
            </Button>
          ) : (
            <Button component={Link} href="/login">
              Login
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
