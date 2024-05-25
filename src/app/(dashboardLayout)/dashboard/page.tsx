"use client";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getUserInfo } from "@/services/actions/auth.services";
import { logoutUser } from "@/services/actions/logoutUser";
import { useRouter } from "next/navigation";

const RoleBasedRedirect = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userInfo = getUserInfo();

  if (!userInfo || !userInfo?.role) {
    dispatch(logout());
    logoutUser(router);
    return router.push("/login");
  }
  if (!userInfo) {
    return router.push("/login");
  }
  if (userInfo.role === "admin") {
    return router.push("/dashboard/user-management");
  }
  if (userInfo.role === "user") {
    return router.push("/dashboard/my-profile");
  }
};

export default RoleBasedRedirect;
