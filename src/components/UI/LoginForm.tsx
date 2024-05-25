"use client";

import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { storeUserInfo } from "@/services/actions/auth.services";
import { userLogin } from "@/services/actions/userLogin";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const res = await userLogin(formData);
      // console.log(res);
      if (res?.data?.token) {
        toast.success(res?.message);
        storeUserInfo({ token: res?.data?.token });
        dispatch(setUser({ user: res.data, token: res.data.token }));
      } else {
        // setError(res.message);
        console.log(res);
      }
    } catch (err: any) {
      console.error(err?.message);
    }
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
