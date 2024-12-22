import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center h-full w-full">
      <div className="block lg:hidden">
        <Navbar />
      </div>

      <div className="hidden lg:flex h-full w-[242px] flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>

      <div className="lg:bg-[#FAFAFA] pt-16 lg:pt-0 lg:pl-[242px] h-full w-full">
        <div className="lg:p-6 h-full lg:max-w-screen-2xl lg:mx-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
