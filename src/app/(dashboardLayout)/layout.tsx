"use client";
import Sidebar from "@/components/Dashboard/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = { name: "emdadullah", role: "admin" };
  if (!user.role) {
    return router.push("/login");
  }
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-grow bg-gray-100 p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
