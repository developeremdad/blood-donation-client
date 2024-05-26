"use client";

import { useAddDonationRequestMutation } from "@/redux/features/donation-request/donationRequestManagement.api";
import { useGetMyProfileQuery } from "@/redux/features/user/userManagement.api";
import { TError } from "@/types/global";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import MyDatePicker from "../Forms/MyDatePicker";
import MyForm from "../Forms/MyForm";
import MyInput from "../Forms/MyInput";
import MyTimePicker from "../Forms/MyTimePicker";

const BloodRequestForm = ({ donorId }: { donorId: string }) => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [toastId, setToastId] = useState<string | number>(0);
  const [addDonationRequest, { data: rData, error: rError }] =
    useAddDonationRequestMutation();
  const { data: requester, isFetching } = useGetMyProfileQuery(undefined);

  if (rData?.success) {
    toast.success(rData?.message, { id: toastId });
  }

  if (rError) {
    toast.success((rError as TError)?.data?.message, { id: toastId });
  }

  if (isFetching) {
    return <p>Loading . . .</p>;
  }

  const handleRequestSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Donation requesting. . . ");
    setToastId(toastId);
    const requestData = { ...values, agreeTerms, donorId };
    addDonationRequest(requestData);
  };
  return (
    <MyForm
      onSubmit={handleRequestSubmit}
      defaultValues={{
        phoneNumber: requester?.data?.contact || "",
        hospitalName: "",
        hospitalAddress: "",
        reason: "",
        dateOfDonation: "",
        timeOfDonation: "",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <MyInput
          name="phoneNumber"
          label="Your Contact"
          css="w-full"
          placeholder="Contact"
          required={true}
          type="text"
        />
        <MyInput
          name="hospitalName"
          label="Hospital Name"
          css="w-full"
          placeholder="Hospital name"
          required={true}
          type="text"
        />
        <MyInput
          name="hospitalAddress"
          label="Hospital Address"
          css="w-full"
          placeholder="Hospital address"
          required={true}
          type="text"
        />
        <MyInput
          name="reason"
          label="Reason"
          css="w-full"
          placeholder="Reason"
          required={true}
          type="text"
        />
        <MyDatePicker
          name="dateOfDonation"
          css="w-full"
          placeholder="Pick date"
          label="Date of donation"
          required={true}
        />
        <MyTimePicker
          name="timeOfDonation"
          css="w-full"
          required={true}
          label="Time of donation"
        />
      </div>
      <div className="form-control my-2 w-full">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            name="terms"
            required
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="checkbox border-2"
          />
          <span className="label-text">
            I agree to the terms and conditions
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={!agreeTerms}
        className="btn btn-sm rounded-full mt-5 bg-orange-500 text-white w-full hover:bg-orange-700"
      >
        Send Request
      </button>
    </MyForm>
  );
};

export default BloodRequestForm;
