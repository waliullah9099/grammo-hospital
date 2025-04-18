import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import THInput from "@/components/Forms/THInput";
import THForms from "@/components/Forms/THForms";
import THModal from "@/components/Shared/THModal/THModal";
import THFileUpload from "@/components/Forms/THFileUpload";
import { modifyPayload } from "@/utils/modifyPayload";
import { useCreateSpecialityMutation } from "@/redux/api/specialtiesApi";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const [createSpeciality] = useCreateSpecialityMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    const res = await createSpeciality(data).unwrap();
    // console.log(res?.data?.id);
    if (res?.data?.id) {
      toast.success("Speciality created successfully...");
      setOpen(false);
    }

    try {
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return (
    <>
      <THModal open={open} setOpen={setOpen} title="Create a new Speciality">
        <THForms onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <THInput name="title" label="Title" />
            </Grid>
            <Grid item md={6}>
              <THFileUpload name="file" label="Upload a file" />
            </Grid>
          </Grid>

          <Button type="submit" sx={{ mt: 1 }}>
            Add
          </Button>
        </THForms>
      </THModal>
    </>
  );
};

export default SpecialistModal;
