"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../../redux/store";
import Link from "next/link";
import { fetchUsers, deleteUser } from "@/services/user.service";
import { useRouter } from "next/navigation";

const UserList: React.FC = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const route = useRouter();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  if (loading)
    return (
      <div className=" w-full h-screen items-center justify-center flex">
        <p className=" text-xl">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className=" h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );

  return (
    <div className=" px-8 py-5">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <button
        onClick={() => route.push("/create")}
        className="btn py-2 rounded px-2 bg-blue-500 text-white mb-4"
      >
        Add New User
      </button>
      <div className="grid gap-4 py-5 mt-8">
        {users.length === 0 && !error && !loading && (
          <div className="  h-40 flex items-center justify-center">
            <p className=" text-xl">No record found...</p>
          </div>
        )}
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded flex justify-between"
          >
            <div>
              <p className="font-semibold">
                {user.firstName} {user.lastName}
              </p>
              <p>{user.occupation}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => route.push(`/user/${user.id}`)}
                className="btn bg-green-500 px-5 py-2 rounded text-white"
              >
                View
              </button>
              <button
                onClick={() => handleDelete(user.id!)}
                className="btn  px-5 py-2 rounded bg-red-500 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
