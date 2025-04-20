import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { TimePicker } from "@mui/x-date-pickers";

interface ITimePicker {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const THTimePicker = ({
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx,
}: ITimePicker) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={dayjs(new Date().toDateString())}
        render={({ field: { onChange, value, ...field } }) => {
          return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label={label}
                timezone="system"
                disablePast
                {...field}
                onChange={(time) => onChange(time)}
                value={value || Date.now()}
                slotProps={{
                  textField: {
                    required: required,
                    size: size,
                    sx: {
                      ...sx,
                    },
                    variant: "outlined",
                    fullWidth: fullWidth,
                  },
                }}
              />
            </LocalizationProvider>
          );
        }}
      />
    </>
  );
};

export default THTimePicker;
