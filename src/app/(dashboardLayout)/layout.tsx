"use client";
import Sidebar from "@/components/Dashboard/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { isLoggedIn } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
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
