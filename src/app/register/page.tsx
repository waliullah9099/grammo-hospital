"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import registerImage from "@/assets/svgs/logo.svg";
import Link from "next/link";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";

interface IPatientData {
  name: string;
  email: string;
  address: string;
  contactNumber: string;
}

interface IPatientFormData {
  password: string;
  patient: IPatientData;
}

const PatientRegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPatientFormData>();
  const onSubmit: SubmitHandler<IPatientFormData> = async (values) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values?.password,
          email: values?.patient?.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

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
          {...register("patient.name")}
        />
        <div className="flex gap-5">
          <input
            className="w-full border rounded-md shadow py-2.5 px-3.5"
            placeholder="Email"
            type="email"
            {...register("patient.email")}
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
            {...register("patient.address")}
          />
          <input
            className="w-full border rounded-md shadow py-2.5 px-3.5"
            placeholder="Phone Number"
            type="number"
            {...register("patient.contactNumber")}
          />
        </div>
        <input
          className="w-full py-2.5 px-3.5 bg-primary-base text-white text-lg font-medium rounded shadow cursor-pointer"
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
