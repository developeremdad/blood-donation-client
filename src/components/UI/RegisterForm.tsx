"use client";

import { storeUserInfo } from "@/services/actions/auth.services";
import { userLogin } from "@/services/actions/userLogin";
import { registerUser } from "@/services/actions/userRegister";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    donateBlood: false,
    bloodType: "",
    location: "",
    age: 0,
    bio: "",
    lastDonationDate: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    formData.age = Number(formData.age);
    try {
      const res = await registerUser(formData);
      if (res?.data?.id) {
        const result = await userLogin({
          password: formData.password,
          email: formData.email,
        });
        if (result?.data?.token) {
          storeUserInfo({ token: result?.data?.token });
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold text-center text-orange-500">
        Register now!
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input input-bordered"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            className="input input-bordered"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Donation Date</span>
          </label>
          <input
            type="date"
            name="lastDonationDate"
            className="input input-bordered"
            value={formData.lastDonationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control col-span-2">
          <label className="label cursor-pointer">
            <span className="label-text font-bold">
              Donate Blood Availability?
            </span>
            <input
              type="checkbox"
              name="donateBlood"
              className="checkbox checkbox-primary"
              checked={formData.donateBlood}
              onChange={handleChange}
            />
          </label>
        </div>
        {formData.donateBlood && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blood Type</span>
              </label>
              <select
                className="input input-bordered"
                name="bloodType"
                id="blood-type"
                value={formData.bloodType}
                onChange={handleChange}
                required
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
      </div>
      <div className="form-control mt-6">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 rounded-full px-4 py-2 text-white w-full"
        >
          Register
        </button>
      </div>
      <div className="text-center mt-2">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 font-bold underline">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
