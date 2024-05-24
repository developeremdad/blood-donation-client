"use client";
import MyDatePicker from "@/components/Forms/MyDatePicker";
import MyForm from "@/components/Forms/MyForm";
import MyInput from "@/components/Forms/MyInput";
import MyTimePicker from "@/components/Forms/MyTimePicker";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const BloodRequestPage = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const handleRequestSubmit = async (values: FieldValues) => {
    const updatedData = { ...values, agreeTerms };
    console.log(updatedData);
  };

  return (
    <div className="container mx-auto flex justify-center">
      <div className="lg:max-w-lg border rounded px-4 py-6 border-orange-500 my-10 shadow-md">
        <h3 className="text-2xl font-bold text-center text-orange-500">
          Blood Request Form
        </h3>
        <MyForm
          onSubmit={handleRequestSubmit}
          defaultValues={{
            phoneNumber: "01625360571",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <MyInput
              name="phoneNumber"
              label="Contact"
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
              label="Date"
              required={true}
            />
            <MyTimePicker
              name="time"
              css="w-full"
              required={true}
              label="Time"
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
            className="btn btn-sm rounded-full mt-5 bg-orange-500 text-white w-full hover:bg-orange-700"
          >
            Send Request
          </button>
        </MyForm>
      </div>
    </div>
  );
};

export default BloodRequestPage;
