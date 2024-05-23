import bloodLogin from "@/assets/blood-login.png";
import LoginForm from "@/components/UI/LoginForm";
import Image from "next/image";
const LoginPage = () => {
  return (
    <div>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="py-6">
              <Image
                src={bloodLogin}
                className="max-w-xl rounded-md"
                alt="Blood-login"
              />
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex items-center justify-center">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
