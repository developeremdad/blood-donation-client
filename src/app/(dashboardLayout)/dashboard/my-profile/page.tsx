"use client";
import MyDatePicker from "@/components/Forms/MyDatePicker";
import MyForm from "@/components/Forms/MyForm";
import MyInput from "@/components/Forms/MyInput";
import MySelect from "@/components/Forms/Myselect";
import { useGetMyProfileQuery } from "@/redux/features/user/userManagement.api";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

const MyProfilePage = () => {
  const { data } = useGetMyProfileQuery(undefined);
  console.log({ data });
  const methods = useForm({
    defaultValues: {
      username: "john_doe",
      email: "john_doe@example.com",
    },
  });
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (data: FieldValues) => {
    console.log(data);
    setEditMode(false);
  };
  const profileData = {
    name: "user5",
    email: "user5@gmail.com",
    bloodType: "B+",
    location: "dhaka",
    age: 25,
    bio: "A regular blood donor",
    lastDonationDate: "2024-05-25",
  };
  return (
    <div className="lg:max-w-lg mx-auto border rounded px-4 py-6 bg-white border-orange-500 my-5 shadow-md">
      <h3 className="text-2xl font-bold text-center text-orange-500 mb-2">
        My Profile
      </h3>
      <hr />
      <FormProvider {...methods}>
        <MyForm onSubmit={handleSubmit} defaultValues={profileData}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MyInput
              name="name"
              label="Name"
              placeholder="Enter your name"
              required={true}
              type="text"
              css="w-full"
              disabled={!editMode}
            />
            <MyInput
              name="email"
              label="Email"
              placeholder="Enter your email"
              required={true}
              type="email"
              css="w-full"
              disabled={!editMode}
            />
            <MyInput
              name="location"
              label="Location"
              placeholder="Enter your location"
              required={true}
              type="text"
              css="w-full"
              disabled={!editMode}
            />
            <MyInput
              name="age"
              label="Age"
              placeholder="Enter your age"
              required={true}
              type="number"
              css="w-full"
              disabled={!editMode}
            />
            <MySelect
              name="bloodType"
              label="Blood Type"
              options={[
                { value: "A+", label: "A+" },
                { value: "A-", label: "A-" },
                { value: "B+", label: "B+" },
                { value: "B-", label: "B-" },
                { value: "AB+", label: "AB+" },
                { value: "AB-", label: "AB-" },
                { value: "O+", label: "O+" },
                { value: "O-", label: "O-" },
              ]}
              css="w-full"
              required={true}
              disabled={!editMode}
            />

            <MyDatePicker
              name="lastDonationDate"
              label="Last Donation Date"
              placeholder="Enter bio"
              required={true}
              css="w-full"
              disabled={!editMode}
            />
            <div className="col-span-2">
              <MyInput
                name="bio"
                label="Bio"
                placeholder="Enter bio"
                required={true}
                type="text"
                css="w-full"
                disabled={!editMode}
              />
            </div>
            <div>
              {editMode && (
                <div className="flex justify-between gap-3">
                  <button
                    type="submit"
                    className="btn btn-sm rounded-full mt-5 bg-blue-500 text-white w-full hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="btn btn-sm rounded-full mt-5 bg-red-500 text-white w-full hover:bg-red-700"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </MyForm>
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
        <Link href="/dashboard/user/change-password">
          <button className="btn btn-sm rounded-full bg-orange-500 text-white w-full hover:bg-orange-600">
            Change Password
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfilePage;
