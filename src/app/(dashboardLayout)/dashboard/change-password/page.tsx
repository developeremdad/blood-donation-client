"use client";
import MyForm from "@/components/Forms/MyForm";
import MyInput from "@/components/Forms/MyInput";
import { useChangePasswordMutation } from "@/redux/features/user/userManagement.api";
import { TError } from "@/types/global";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ChangePasswordPage = () => {
  // const router = useRouter();
  // const dispatch = useAppDispatch();
  const [toastId, setToastId] = useState<string | number>(0);
  const [changePassword, { data, error }] = useChangePasswordMutation();

  if (error) {
    toast.error((error as TError).data.message, { id: toastId });
  }

  if (data) {
    toast.success(data.message, { id: toastId });
    // dispatch(logout());
    // logoutUser(router);
  }

  const handleSubmit = (values: FieldValues) => {
    const toastId = toast.loading("Password changing...");
    setToastId(toastId);

    if (values.newPassword !== values.confirmPassword) {
      toast.error("Passwords do not match", { id: toastId });
    }
    changePassword({
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    });
  };
  return (
    <div className="container mx-auto flex justify-center">
      <div className="lg:max-w-lg border rounded px-4 py-6 border-orange-500 my-10 shadow-md">
        <h3 className="text-2xl font-bold text-center text-orange-500">
          Change Password
        </h3>
        <MyForm onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3">
            <MyInput
              name="oldPassword"
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
            <MyInput
              name="confirmPassword"
              label="Confirm password"
              css="w-full"
              placeholder="Confirm Password"
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
