"use client";
import MyInput from "@/components/Forms/MyInput";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

const MyProfilePage = () => {
  const methods = useForm({
    defaultValues: {
      username: "john_doe",
      email: "john_doe@example.com",
    },
  });
  const [editMode, setEditMode] = useState(false);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setEditMode(false);
  };

  return (
    <div className="max-w-md mx-auto border rounded px-4 py-6 border-blue-500 my-10 shadow-md">
      <h3 className="text-2xl font-bold text-center text-blue-500">
        My Profile
      </h3>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-4">
          <div className="grid grid-cols-1 gap-4">
            <MyInput
              name="username"
              label="Username"
              placeholder="Enter your username"
              required={true}
              type="text"
              css="w-full"
              //   disabled={!editMode}
            />
            <MyInput
              name="email"
              label="Email"
              placeholder="Enter your email"
              required={true}
              type="email"
              css="w-full"
              //   disabled={!editMode}
            />
            {editMode && (
              <button
                type="submit"
                className="btn btn-sm rounded-full mt-5 bg-blue-500 text-white w-full hover:bg-blue-700"
              >
                Save Changes
              </button>
            )}
          </div>
        </form>
      </FormProvider>
      {!editMode && (
        <button
          onClick={() => setEditMode(true)}
          className="btn btn-sm rounded-full mt-5 bg-blue-500 text-white w-full hover:bg-blue-700"
        >
          Edit Profile
        </button>
      )}
      <div className="form-control mt-4">
        <Link href="/change-password">
          <button className="btn btn-sm rounded-full bg-red-500 text-white w-full hover:bg-red-700">
            Change Password
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfilePage;
