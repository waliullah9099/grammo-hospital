"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/doctorApi";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import Image from "next/image";
import { useDebounced } from "@/redux/hooks";
import { toast } from "sonner";

const Doctor = () => {
  const [isModalOpen, setIsModalaOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  // console.log(searchTerm);

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const [deleteDoctor] = useDeleteDoctorMutation();
  const doctors = data?.doctors;
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    console.log(id);

    try {
      const res = await deleteDoctor(id).unwrap();
      if (res?.id) {
        toast.success("Doctor deleted successfully..!");
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  console.log(data);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "qualification", headerName: "Qualification", flex: 1 },
    {
      field: "icon",
      headerName: "Photo",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row?.icon} height={30} width={30} alt="icon" />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row?.id)} aria-label="delete">
            <GridDeleteIcon />
          </IconButton>
        );
      },
    },
  ];

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
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Specialist"
          size="small"
        />
      </Stack>

      {/* all docoors  */}

      {!isLoading ? (
        <Box mt={5}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.......</h1>
      )}
    </Box>
  );
};

export default Doctor;
