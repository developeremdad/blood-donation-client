"use client";
import useUserInfo from "@/app/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const userInfo = useUserInfo();

  const handleLogOut = () => {
    logoutUser(router);
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="bg-orange-500 hover:bg-orange-600 rounded-full px-4 py-2 text-white"
            >
              {userInfo ? (
                <div className="capitalize">{userInfo?.name}</div>
              ) : (
                <div>
                  <Link href="/login">Login</Link>
                </div>
              )}
            </div>
            {userInfo && (
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/dashboard/my-profile">Profile</Link>
                </li>
                <li onClick={handleLogOut}>
                  <span>Logout</span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
