"use client";

import { useRouter } from "next/navigation";

const PrivateRoute = ({
  children,
  roles,
}: {
  children: React.ReactNode;
  roles: string[];
}) => {
  const user = { name: "emdadullah", role: "admin" };
  const router = useRouter();
  console.log(roles);
  //   useEffect(() => {
  if (!user) {
    router.push("/login");
  } else if (roles && !roles.includes(user.role)) {
    router.push("/"); // Forbidden page
  }
  //   }, [user, roles, router]);

  if (!user || (roles && !roles.includes(user.role))) {
    return <p>Loading. . . </p>; // Or a loading spinner
  }

  return <>{children}</>;
};

export default PrivateRoute;
