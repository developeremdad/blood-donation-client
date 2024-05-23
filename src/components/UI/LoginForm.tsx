"use client";

import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: {
    target: { name: any; value: any; type: any; checked: any };
  }) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Handle form submission (e.g., send data to API)
    console.log("Form submitted", formData);
  };
  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold text-center text-orange-500">
        Login now!
      </h1>
      <div className="">
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
      </div>
      <div className="form-control mt-6">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 rounded-full px-4 py-2 text-white w-full"
        >
          Login
        </button>
      </div>
      <div className="text-center mt-2">
        Does not have an account?{" "}
        <Link href="/register" className="text-blue-500 font-bold underline">
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
