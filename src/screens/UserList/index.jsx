"use client";
import React, { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import UserModalForm from "@/components/ui-components/forms/UserModalForm";
import { GET_ALL_USER } from "@/redux/demo/demo.type";


const User = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(0);
  const dispatch=useDispatch();
  

  const users=useSelector((store)=> {
    return store.demo.users
  });

  const getUsers = async () => {
    dispatch({type: GET_ALL_USER })
  };

  useEffect(() => {
    getUsers();
  }, []);

  const editUser = (Code) => {
    setUserId(Code);
    setIsModalOpen(true);
  };

  const deleteUser = (Code) => {
    
  };

  return (
    <>
      <div className="p-2 mt-2">
        <table className="text-sm text-center shadow-xl w-full">
          <thead className="border-b bg-gray-400">
            <tr>
              <th className="p-2">Sr No</th>
              <th className="p-2">First Name</th>
              <th className="p-2">Last Name</th>
              <th className="p-2">City</th>
              <th className="p-2">State</th>
              <th className="p-2">Country</th>
              <th className="p-2">Gender</th>
              <th className="p-2">Email</th>
              <th className="p-2">Mobile No</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-2">{(index + 1)}</td>
                  <td className="p-2">{user.FirstName}</td>
                  <td className="p-2">{user.LastName}</td>
                  <td className="p-2">{user.CityName}</td>
                  <td className="p-2">{user.StateName}</td>
                  <td className="p-2">{user.CountryName}</td>
                  <td className="p-2">
                    {user.Gender}
                  </td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.MobileNo}</td>
                  <td className="p-2">
                    <button
                      className="text-sm bg-blue-400 p-2 rounded-lg"
                      onClick={() => editUser(user.Code)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-sm bg-red-400 ml-3 p-2 rounded-lg"
                      onClick={() => deleteUser(user.Code)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-3 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <UserModalForm
          isOpen={isModalOpen}
          title="Edit User"
          onClose={() => setIsModalOpen(false)}
          editUserId={userId}
        />
      )}
    </>
  );
};

export default User;
