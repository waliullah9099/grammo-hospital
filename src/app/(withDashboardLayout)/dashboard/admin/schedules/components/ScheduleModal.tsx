import THForms from "@/components/Forms/THForms";
import THModal from "@/components/Shared/THModal/THModal";
import { TOpenSetOpenProps } from "@/types";
import { Button } from "@mui/material";
import { FieldValues } from "react-hook-form";

const ScheduleModal = ({ open, setOpen }: TOpenSetOpenProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
  };
  return (
    <>
      <THModal open={open} setOpen={setOpen} title="Create a schedule">
        <THForms onSubmit={handleFormSubmit} defaultValues={{}}>
          <Button type="submit" sx={{ mt: 2 }}>
            Create
          </Button>
        </THForms>
      </THModal>
    </>
  );
};

export default ScheduleModal;
