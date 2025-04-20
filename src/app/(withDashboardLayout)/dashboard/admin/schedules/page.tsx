"use client";

import { useDebounced } from "@/redux/hooks";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import ScheduleModal from "./components/ScheduleModal";

const Schedules = () => {
  const [isModalOpen, setIsModalaOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  console.log(searchTerm);
  return (
    <Box>
      {/* add button and search input  */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setIsModalaOpen(true)}> Add Schedule </Button>
        <ScheduleModal open={isModalOpen} setOpen={setIsModalaOpen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Schedule"
          size="small"
        />
      </Stack>

      {/* all docoors  */}

      {/* {!isLoading ? (
        <Box mt={5}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.......</h1>
      )} */}
    </Box>
  );
};

export default Schedules;
