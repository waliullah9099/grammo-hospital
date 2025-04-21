import THDatePicker from "@/components/Forms/THDatePicker";
import THForms from "@/components/Forms/THForms";
import THTimePicker from "@/components/Forms/THTimeModal";
import { timeFormatter } from "@/components/Forms/timeFormatter";
import THModal from "@/components/Shared/THModal/THModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { TOpenSetOpenProps } from "@/types";
import { dateFormatter } from "@/utils/dateFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ScheduleModal = ({ open, setOpen }: TOpenSetOpenProps) => {
  const [createSchedule] = useCreateScheduleMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);
    try {
      const res = await createSchedule(values).unwrap();
      if (res?.data?.length > 0) {
        toast.success("Schedules created successfully");
        setOpen(false);
      }
      console.log(res);
    } catch (error) {
      console.error("Error creating schedule:", error);
    }
  };
  return (
    <>
      <THModal open={open} setOpen={setOpen} title="Create a schedule">
        <THForms onSubmit={handleFormSubmit} defaultValues={{}}>
          <Grid container spacing={2} sx={{ width: "400px" }}>
            <Grid item md={12}>
              <THDatePicker name="startDate" label="Start Date" />
            </Grid>
            <Grid item md={12}>
              <THDatePicker name="endDate" label="End Date" />
            </Grid>
            <Grid item md={6}>
              <THTimePicker name="startTime" label="Start Time" />
            </Grid>
            <Grid item md={6}>
              <THTimePicker name="endTime" label="End Time" />
            </Grid>
          </Grid>

          <Button type="submit" sx={{ mt: 2 }}>
            Create
          </Button>
        </THForms>
      </THModal>
    </>
  );
};

export default ScheduleModal;
