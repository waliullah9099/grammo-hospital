import THDatePicker from "@/components/Forms/THDatePicker";
import THForms from "@/components/Forms/THForms";
import THModal from "@/components/Shared/THModal/THModal";
import { TOpenSetOpenProps } from "@/types";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

const ScheduleModal = ({ open, setOpen }: TOpenSetOpenProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    try {
      console.log(values);
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
