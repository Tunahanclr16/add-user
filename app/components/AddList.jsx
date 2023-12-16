"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Formik } from "formik";
import AddForm from "./AddForm";

export default function AddList({user,setUser}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleDeleteAll =()=>{
    setUser([])
  }

  return (
    <>
    
      <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
        <button
          type="button"
          onClick={toggleModal}
          className="w-40 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
        >
          <svg
            className="-ml-1 mr-2 h-6  w-6"
            fillRule="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Add user
        </button>
        
        {/* Diğer buton */}
        <a
          href="#"
          className="w-40 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
        >
          <svg
            className="-ml-1 mr-2 h-6  w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
          Export
        </a>
        <button
          type="button"
          onClick={handleDeleteAll}
          className="text-white h-10 bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
        >
          Delete All
        </button>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed max-w-2xl mx-auto  z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="bg-white rounded-lg w-full h-[630px] shadow relative">
              <div className="flex justify-between items-start p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold">Add new user</h3>
                <div className="flex mt-3 " onClick={toggleModal}>
                  <IoMdClose className="cursor-pointer" />
                </div>
              </div>
            <div className="p-2">
        <AddForm toggleModal={toggleModal}  user={user} setUser={setUser}/>  
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
