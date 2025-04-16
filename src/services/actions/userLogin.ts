"use server";

import { Inputs } from "@/app/login/page";

export const userLogin = async (data: Inputs) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKED_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
