import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  example: string;
  exampleRequired: string;
};
const Input = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <>
      <input {...register("example")} />
    </>
  );
};

export default Input;
