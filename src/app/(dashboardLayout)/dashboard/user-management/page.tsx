"use client";
import PrivateRoute from "@/components/Dashboard/PrivateRoute";
import Loading from "@/components/shared/Loading";
import {
  useGetAllUsersQuery,
  useUpdateUserStatusRoleMutation,
} from "@/redux/features/user/userManagement.api";
import { useState } from "react";
import { toast } from "sonner";

const UserManagement = () => {
  const [toastId, setToastId] = useState<string | number>(0);
  const { data: users, isFetching } = useGetAllUsersQuery(undefined);
  const [updateUserStatusRole, { data: uData }] =
    useUpdateUserStatusRoleMutation();
  console.log(users);

  if (uData) {
    toast.success(uData?.message, { id: toastId });
  }

  const handleUserStatus = (userId: string, status: string) => {
    const toastId = toast.loading("Status Updating...");
    setToastId(toastId);
    console.log(userId, status);
    const updateData = {
      id: userId,
      data: { status },
    };
    updateUserStatusRole(updateData);
  };

  const handleRoleChange = (userId: string, newRole: string) => {
    const toastId = toast.loading("Role Updating...");
    setToastId(toastId);
    const updateData = {
      id: userId,
      data: { role: newRole },
    };
    updateUserStatusRole(updateData);
  };

  return (
    <PrivateRoute roles={["admin"]}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-orange-500">
          User Management
        </h2>
        <div className="overflow-x-auto bg-white border border-orange-500 rounded">
          {!isFetching ? (
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
                {users?.map((user) => (
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
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
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
                        <option value="ACTIVATE">Active</option>
                        <option value="DEACTIVATED">Deactivate</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default UserManagement;
