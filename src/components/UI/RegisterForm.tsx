"use client";

import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { storeUserInfo } from "@/services/actions/auth.services";
import { userLogin } from "@/services/actions/userLogin";
import { registerUser } from "@/services/actions/userRegister";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    availability: false,
    bloodType: "",
    location: "",
    age: 0,
    contact: "",
    bio: "",
    photo: "",
    lastDonationDate: "",
  });
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);
      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        if (data.success) {
          setImageUrl(data.data.url);
        } else {
          toast.error("Image upload failed");
          console.error("Image upload failed:", data);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setUploading(false);
      }
    }
  };

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
      toast.error("Passwords do not match");
      return;
    }
    formData.age = Number(formData.age);
    formData.photo = imageUrl;
    try {
      const res = await registerUser(formData);
      if (res?.data?.id) {
        toast.success("Successfully register user");
        const result = await userLogin({
          password: formData.password,
          email: formData.email,
        });
        if (result?.data?.token) {
          storeUserInfo({ token: result?.data?.token });
          dispatch(setUser({ user: result.data, token: result.data.token }));
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
            <span className="label-text">
              Name <span className="text-red-500">*</span>
            </span>
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
            <span className="label-text">
              Email <span className="text-red-500">*</span>
            </span>
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
            <span className="label-text">
              Password <span className="text-red-500">*</span>
            </span>
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
            <span className="label-text">
              Confirm Password <span className="text-red-500">*</span>
            </span>
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
            <span className="label-text">
              Age <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            className="input input-bordered"
            // value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Contact <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            className="input input-bordered"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            name="contact"
            className="input input-bordered w-full p-2"
            placeholder="Contact"
            accept="image/*"
            onChange={handleImageChange}
            disabled={uploading}
          />
        </div>
        <div className="form-control col-span-2">
          <label className="label cursor-pointer">
            <span className="label-text font-bold">
              Donate Blood Availability?
            </span>
            <input
              type="checkbox"
              name="availability"
              className="checkbox checkbox-primary"
              checked={formData.availability}
              onChange={handleChange}
            />
          </label>
        </div>
        {formData.availability && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Blood Type <span className="text-red-500">*</span>
                </span>
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
                <span className="label-text">Last Donation Date</span>
              </label>
              <input
                type="date"
                name="lastDonationDate"
                className="input input-bordered"
                value={formData.lastDonationDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Location <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Your address"
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
