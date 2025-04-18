"use client";
import { useState } from "react";
import SpecialistModal from "./components/SpecialistModal";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useGetAllSpecialitiesQuery } from "@/redux/api/specialtiesApi";

const Specialties = () => {
  const [isModalopen, setIsMOdalaOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialitiesQuery({});
  console.log(data?.data);

  return (
    <Box>
      {/* add button and search input  */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setIsMOdalaOpen(true)}> Add Specialist </Button>
        <SpecialistModal open={isModalopen} setOpen={setIsMOdalaOpen} />
        <TextField placeholder="Search Specialist" size="small" />
      </Stack>

      {/* all specialities  */}
    </Box>
  );
};

export default Specialties;
