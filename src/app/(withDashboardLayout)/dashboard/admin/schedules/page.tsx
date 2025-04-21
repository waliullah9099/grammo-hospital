"use client";

import { useEffect, useState } from "react";
import ScheduleModal from "./components/ScheduleModal";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import {
  useDeleteScheduleMutation,
  useGetAllScheduleQuery,
} from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import { TSchedule } from "@/types/schedule";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Edit } from "@mui/icons-material";
import { toast } from "sonner";

const Schedules = () => {
  const [isModalOpen, setIsModalaOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllScheduleQuery({});
  const [deleteSchedule] = useDeleteScheduleMutation({});

  const schedules = data?.schedules;

  const handleDeleteSchedule = (id: string) => {
    try {
      const res = deleteSchedule(id).unwrap();
      if (res?.success) {
        toast.success("Schedule deleted successfully..!");
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  const handleUpdateSchedule = (id: string) => {
    // Call the delete schedule mutation here
  };

  useEffect(() => {
    const updateData = schedules?.map((schedule: TSchedule) => {
      return {
        id: schedule?.id,
        startDate: dateFormatter(schedule.startDate),
        endDate: dateFormatter(schedule.endDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <>
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteSchedule(row.id)}
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => handleUpdateSchedule(row.id)}
            >
              <Edit sx={{ color: "" }} />
            </IconButton>
          </>
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
        <Button onClick={() => setIsModalaOpen(true)}> Add Schedule </Button>
        <ScheduleModal open={isModalOpen} setOpen={setIsModalaOpen} />
        <TextField placeholder="Search Schedule" size="small" />
      </Stack>

      {/* all docoors  */}

      {!isLoading ? (
        <Box mt={5}>
          <DataGrid rows={schedules ?? []} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.......</h1>
      )}
    </Box>
  );
};

export default Schedules;
