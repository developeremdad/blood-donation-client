import RegisterForm from "@/components/UI/RegisterForm";
const RegisterPage = () => {
  return (
    <div>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100 flex items-center justify-center">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
