"use client";
import { useState } from "react";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import SpecialistModal from "./components/SpecialistModal";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import {
  useDeleteSpecialityMutation,
  useGetAllSpecialitiesQuery,
} from "@/redux/api/specialtiesApi";
import Image from "next/image";
import { toast } from "sonner";

const Specialties = () => {
  const [isModalopen, setIsMOdalaOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialitiesQuery({});
  const [deleteSpeciality] = useDeleteSpecialityMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpeciality(id).unwrap();
      if (res?.id) {
        toast.success("Specialties deleted successfully..!");
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
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
        <Button onClick={() => setIsMOdalaOpen(true)}> Add Specialist </Button>
        <SpecialistModal open={isModalopen} setOpen={setIsMOdalaOpen} />
        <TextField placeholder="Search Specialist" size="small" />
      </Stack>

      {/* all specialities  */}

      {!isLoading ? (
        <Box mt={5}>
          <DataGrid rows={data?.data} columns={columns} hideFooter={true} />
        </Box>
      ) : (
        <h1>Loading.......</h1>
      )}
    </Box>
  );
};

export default Specialties;
