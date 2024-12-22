import LoginForm from "@/components/login-form";

const LoginPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-8">
      <LoginForm />

      <span className="text-[14px] lg:text-base">
        By signing up you agree to the <b>Privacy Policy</b>.
      </span>
    </div>
  );
};

export default LoginPage;
