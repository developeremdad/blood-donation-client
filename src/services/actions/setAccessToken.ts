"use server";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";

const setAccessToken = async (token: string, redirectPath?: string) => {
  const cookieStore = await cookies();

  cookieStore.set("token", token);
  if (redirect) {
    redirect(redirectPath || "/");
  }
};

export default setAccessToken;
