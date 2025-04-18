"use client"
import { Box, Button, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";

const Doctor = () => {
   const [isModalOpen, setIsModalaOpen] = useState<boolean>(false);
  return (
    <Box>
       {/* add button and search input  */}
       <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setIsModalaOpen(true)}> Add Doctor </Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalaOpen} />
        <TextField placeholder="Search Specialist" size="small" />
      </Stack>
    </Box>
  );
};

export default Doctor;
