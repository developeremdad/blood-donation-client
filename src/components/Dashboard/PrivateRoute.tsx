"use client";

import { getUserInfo } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({
  children,
  roles,
}: {
  children: React.ReactNode;
  roles: string[];
}) => {
  const user = getUserInfo();
  const router = useRouter();
  console.log(roles);
  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (roles && !roles.includes(user.role)) {
      router.push("/");
    }
  }, [user, roles, router]);

  if (!user || (roles && !roles.includes(user.role))) {
    return <p>Loading. . . </p>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
