"use client";
import PrivateRoute from "@/components/Dashboard/PrivateRoute";
import { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "user",
      availability: false,
      status: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "admin",
      availability: true,
      status: "deactivate",
    },
    // Add more users as needed
  ]);

  const handleUserStatus = (userId: string, status: string) => {
    console.log(userId, status);
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, status } : user))
    );
  };

  const handleRoleChange = (userId: string, newRole: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  return (
    <PrivateRoute roles={["admin"]}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-orange-500">
          User Management
        </h2>
        <div className="overflow-x-auto bg-white border border-orange-500 rounded">
          <table className="table table-sm w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Availability</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.availability ? (
                      <span className="text-green-500">Available</span>
                    ) : (
                      <span className="text-red-500">Unavailable</span>
                    )}
                  </td>
                  <td>
                    <select
                      className="py-1 px-4 border rounded-full"
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="py-1 px-4 border rounded-full"
                      value={user.status}
                      onChange={(e) =>
                        handleUserStatus(user.id, e.target.value)
                      }
                    >
                      <option value="active">Active</option>
                      <option value="deactivate">Deactivate</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-center my-5 ">
            <div className="join ">
              <button className="join-item btn btn-sm bg-orange-500 text-xl text-white">
                «
              </button>
              <button className="join-item btn btn-sm">1</button>
              <button className="join-item btn btn-sm btn-active">2</button>
              <button className="join-item btn btn-sm">3</button>
              <button className="join-item btn btn-sm">4</button>
              <button className="join-item btn btn-sm bg-orange-500 text-xl text-white">
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default UserManagement;
