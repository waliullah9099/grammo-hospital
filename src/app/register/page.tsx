"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import registerImage from "@/assets/svgs/logo.svg";
import Link from "next/link";
type Inputs = {
  name: string;
  email: string;
  password: string;
  exampleRequired: string;
  address: string;
  number: string;
};
const PatientRegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="w-full max-w-[700px] mx-auto py-12 px-8 rounded-lg shadow-lg mt-20">
      <div className="flex flex-col items-center justify-center mb-3">
        <Image width={50} height={50} src={registerImage} alt="register icon" />
        <h1 className="text-2xl font-bold">Patient Register</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <input
          className="w-full border rounded-md shadow py-2.5 px-3.5"
          placeholder="Name"
          {...register("name")}
        />
        <div className="flex gap-5">
          <input
            className="w-full border rounded-md shadow py-2.5 px-3.5"
            placeholder="Email"
            type="email"
            {...register("email")}
          />
          <input
            className="w-full border rounded-md shadow py-2.5 px-3.5"
            placeholder="Password"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="flex gap-5">
          <input
            className="w-full border rounded-md shadow py-2.5 px-3.5"
            placeholder="Address"
            {...register("address")}
          />
          <input
            className="w-full border rounded-md shadow py-2.5 px-3.5"
            placeholder="Phone Number"
            type="number"
            {...register("number")}
          />
        </div>
        <input
          className="w-full py-2.5 px-3.5 bg-primary-base text-white text-lg font-medium rounded shadow"
          type="submit"
          value="Register"
        />
        <p className="text-center">
          Already have any account?{" "}
          <Link
            className="text-sm hover:text-primary-base duration-200"
            href="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default PatientRegisterForm;
