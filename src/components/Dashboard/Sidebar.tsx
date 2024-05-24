import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-300 text-black border border-r-orange-500">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav className="mt-5">
        <ul>
          <li className="hover:bg-orange-500">
            <Link href="/ ">
              <span className="block py-2.5 px-4">Home</span>
            </Link>
          </li>
          <li className="hover:bg-orange-500 active:bg-orange-500">
            <Link href="/dashboard/my-profile">
              <span className="block py-2.5 px-4">My Profile</span>
            </Link>
          </li>
          <li className="hover:bg-orange-500">
            <Link href="/dashboard/requests">
              <span className="block py-2.5 px-4">My Requests</span>
            </Link>
          </li>
          <li className="hover:bg-orange-500">
            <Link href="/dashboard/donations">
              <span className="block py-2.5 px-4">My Donations</span>
            </Link>
          </li>
          <li className="hover:bg-orange-500">
            <Link href="/dashboard/settings">
              <span className="block py-2.5 px-4">Settings</span>
            </Link>
          </li>
          <li className="hover:bg-orange-500">
            <Link href="/dashboard/help">
              <span className="block py-2.5 px-4">Help</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
