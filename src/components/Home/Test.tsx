"use client";
import { FieldValues } from "react-hook-form";
import MyForm from "../Forms/MyForm";
import MyInput from "../Forms/MyInput";

const Test = () => {
  const handleLogin = async (values: FieldValues) => {
    console.log(values);
    try {
      // const res = await userLogin(values);
      // if (res?.data?.accessTokeLn) {
      //   toast.success(res?.message);
      //   storeUserInfo({ accessToken: res?.data?.accessToken });
      //   // router.push("/dashboard");
      // } else {
      //   setError(res.message);
      //   // console.log(res);
      // }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <MyForm
        onSubmit={handleLogin}
        // defaultValues={{
        //   name: "hello",
        //   password: "",
        // }}
      >
        <MyInput
          name="name"
          label="Name"
          css="w-1/2"
          placeholder="Name"
          required={true}
          type="text"
        />

        <button type="submit">Login</button>
      </MyForm>
    </div>
  );
};

export default Test;
