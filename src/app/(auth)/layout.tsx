import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen fixed grid grid-cols-1 lg:grid-cols-2">
      {/* Static Images */}
      <div className="w-full h-full hidden lg:flex items-center justify-center border-r border-[#D8DAE5] bg-[#FFFFFF]">
        <Image
          src={"/codeant.svg"}
          alt="codeant"
          width={284}
          height={319}
          className="fixed bottom-0 left-0"
        />

        <Image
          src={"/login-card.png"}
          alt="card"
          width={474}
          height={322}
          className=""
        />
      </div>

      {/* Auth Form with Tabs */}
      <div className="w-full px-4 py-6 bg-[#FAFAFA]">{children}</div>
    </div>
  );
};

export default AuthLayout;
