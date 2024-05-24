"use client";
import MyForm from "@/components/Forms/MyForm";
import MyInput from "@/components/Forms/MyInput";
import { FieldValues } from "react-hook-form";

const ChangePasswordPage = () => {
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <div className="container mx-auto flex justify-center">
      <div className="lg:max-w-lg border rounded px-4 py-6 border-orange-500 my-10 shadow-md">
        <h3 className="text-2xl font-bold text-center text-orange-500">
          Change Password
        </h3>
        <MyForm
          onSubmit={handleSubmit}
          defaultValues={{
            password: "01625360571",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <MyInput
              name="password"
              label="Old Password"
              css="w-full"
              placeholder="Old Password"
              required={true}
              type="text"
            />
            <MyInput
              name="newPassword"
              label="New Password"
              css="w-full"
              placeholder="New Password"
              required={true}
              type="password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-sm rounded-full mt-5 bg-orange-500 text-white w-full hover:bg-orange-700"
          >
            Change Password
          </button>
        </MyForm>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
