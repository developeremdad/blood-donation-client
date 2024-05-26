"use client";
import MyDatePicker from "@/components/Forms/MyDatePicker";
import MyForm from "@/components/Forms/MyForm";
import MyInput from "@/components/Forms/MyInput";
import MySelect from "@/components/Forms/Myselect";
import {
  useGetMyProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/features/user/userManagement.api";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const MyProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [availability, setAvailability] = useState(false);
  const [toastId, setToastId] = useState<string | number>(0);
  const { data, isFetching } = useGetMyProfileQuery(undefined);
  const [updateUser, { data: uData, isLoading: uIsLoading }] =
    useUpdateUserProfileMutation();

  if (isFetching || uIsLoading) {
    return (
      <div>
        <h1 className="text-center text-error mt-48">
          <span className="loading loading-infinity loading-lg"></span>
        </h1>
      </div>
    );
  }

  const handleSubmit = (values: FieldValues) => {
    const toastId = toast.loading("Data saving. . . ");
    setToastId(toastId);
    values.availability = availability;
    // console.log(values);
    updateUser(values);
  };
  if (uData?.success) {
    toast.success(uData?.message, { id: toastId });
  }

  const handleChange = (e: any) => {
    const { checked } = e.target;
    setAvailability(checked);
  };

  return (
    <div className="container mx-auto border rounded px-4 py-6 bg-white border-orange-500 my-5 shadow-md">
      <h3 className="text-2xl font-bold text-center text-orange-500 mb-2">
        My Profile
      </h3>
      <hr />
      <MyForm onSubmit={handleSubmit} defaultValues={data?.data}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 items-end">
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
            name="location"
            label="Location"
            placeholder="Enter your location"
            type="text"
            css="w-full"
            disabled={!editMode}
          />
          <MyInput
            name="contact"
            label="Contact"
            placeholder="Enter your contact"
            required={true}
            type="text"
            css="w-full"
            disabled={!editMode}
          />
          <MyInput
            name="photo"
            label="Photo"
            placeholder="Enter your photo"
            type="text"
            css="w-full"
            disabled={!editMode}
          />
          <div
            className={`form-control  justify-center rounded-lg ${
              !editMode && "bg-gray-100"
            }`}
          >
            <label className="cursor-pointer rounded-lg border px-2 label py-3">
              <span className="label-text">Availability for blood</span>
              <input
                type="checkbox"
                disabled={!editMode}
                onChange={handleChange}
                defaultChecked={data?.data?.availability}
                className="checkbox checkbox-accent"
              />
            </label>
          </div>
          <MyInput
            name="userProfile.age"
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
            disabled={!editMode}
          />

          <MyDatePicker
            name="userProfile.lastDonationDate"
            label="Last Donation Date"
            placeholder="Enter bio"
            css="w-full"
            disabled={!editMode}
          />
          <div className="lg:col-span-3 md:col-span-2">
            <MyInput
              name="userProfile.bio"
              label="Bio"
              placeholder="Enter bio"
              type="text"
              css="w-full"
              disabled={!editMode}
            />
          </div>
        </div>
        <div>
          {editMode && (
            <div className="flex justify-between gap-3 lg:w-1/2 md:w-2/3 sm:w-full mx-auto">
              <button
                type="submit"
                className="btn btn-sm px-12 rounded-full mt-5 bg-blue-500 text-white  hover:bg-blue-700"
              >
                {uIsLoading ? "Saving" : "Save"}
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="btn btn-sm px-12 rounded-full mt-5 bg-red-500 text-white hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </MyForm>
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
