"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";

const Specialties = () => {
  const [isModalopen, setIsMOdalaOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setIsMOdalaOpen(true)}> Add Specialist </Button>
        <SpecialistModal open={isModalopen} setOpen={setIsMOdalaOpen} />
        <TextField placeholder="Search Specialist" size="small" />
      </Stack>
    </Box>
  );
};

export default Specialties;
