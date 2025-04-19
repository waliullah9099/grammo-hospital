import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import THForms from "@/components/Forms/THForms";
import THFullScreenModal from "@/components/Shared/THModal/THFullScreenModal";
import THInput from "@/components/Forms/THInput";
import { Gender } from "@/types";
import THSelectField from "@/components/Forms/THSelectFileds";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValues = {
  doctor: {
    email: "",
    name: "",
    contactNumber: "",
    address: "",
    registrationNumber: "",
    gender: "",
    experience: 0,
    apointmentFee: 0,
    qualification: "",
    currentWorkingPlace: "",
    designation: "",
    profilePhoto: "",
  },
  password: "",
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const [createDoctor] = useCreateDoctorMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
    const data = modifyPayload(values);
    const res = await createDoctor(data).unwrap();
    console.log(res);
    if (res?.data?.id) {
      toast.success("Doctor created successfully...");
      setOpen(false);
    }

    try {
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  return (
    <>
      <THFullScreenModal open={open} setOpen={setOpen} title="Create a doctor">
        <THForms onSubmit={handleFormSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="doctor.name"
                label="Name"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="doctor.email"
                type="email"
                label="Email"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="password"
                type="password"
                label="Password"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="doctor.contactNumber"
                label="Contract Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="doctor.address"
                label="Address"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="doctor.registrationNumber"
                label="Registration Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="doctor.experience"
                type="number"
                label="Experience"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <THSelectField
                items={Gender}
                name="doctor.gender"
                label="Gender"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="doctor.apointmentFee"
                type="number"
                label="ApointmentFee"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="doctor.qualification"
                label="Qualification"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="doctor.currentWorkingPlace"
                label="Current Working Place"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <THInput
                name="doctor.designation"
                label="Designation"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>

          <Button type="submit">Create</Button>
        </THForms>
      </THFullScreenModal>
    </>
  );
};

export default DoctorModal;
