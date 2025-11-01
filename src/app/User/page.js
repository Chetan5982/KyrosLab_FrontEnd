"use client";
import React, { useState } from "react";
import UserModalForm from "@/components/ui-components/forms/UserModalForm";
import User from "@/screens/UserList";
import { divide } from "lodash";
import { IconButton } from "@mui/material";
import { PageviewRounded } from "@mui/icons-material";

export default function Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className=" flex justify-center  pt-20 ">
      <div className="mt-4 bg-white border border-gray-200  rounded-lg shadow-sm overflow-hidden">
        <div className="w-full text-center bg-[#024638] text-white">
          <h1 className="pt-2 pb-2 font-black text-2xl">
            User Registration Form
          </h1>
        </div>

        <hr></hr>
        <div className="flex justify-between ml-2 mr-2">
          <button
            className=" items-center text-center  mt-2  border p-2 border-[#e3e3e3] cursor-pointer bg-[#024638] text-white rounded-lg"
            onClick={() => setModalOpen(true)}
          >
            Create User
          </button>
          <div className="flex flex-wrap content-around mt-2 ">
            <input
              type="text"
              className="h-9 bg-slate-200 border-2 border-transparent hover:border-blue-500 transition duration-500 ease-in-out   rounded-md -mr-1 leading-8 "
              placeholder="Search"
            />
            <IconButton sx={{ padding: 0, marginTop: -1 }}>
              <PageviewRounded sx={{ fontSize: 50 }}></PageviewRounded>
            </IconButton>
          </div>
        </div>
        <User />
      </div>

      <UserModalForm
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Create New User"
        editUserId={0}
      />
    </div>
  );
}
