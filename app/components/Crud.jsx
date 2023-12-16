"use client";
import React, { useState } from "react";
import Image from "next/image";
import CrudList from "./CrudList";
import CrudSettingİcon from "./CrudSettingİcon";
import AddList from "./AddList";
export default function Crud() {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Kullanıcı arama işlevi
  const searchUser = () => {
    const filteredUsers = user.filter((userData) => {
      // Kullanıcı adı veya soyadı içeriyorsa filtrele
      return (
        userData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        userData.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    return filteredUsers;
  };

  // Arama terimini güncelleme işlevi
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="sm:flex mt-4">
        <div className="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
          <form action="">
            <label htmlFor="users-search" className="sr-only">
              Search
            </label>
            <div className="mt-1 relative lg:w-64 xl:w-96">
              <input
              onChange={handleSearch}
                type="text"
                name="email"
                id="users-search"
                className="bg-gray-50 h-12 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600   block w-full p-2.5"
                placeholder="Search for users"
              ></input>
            </div>
          </form>
          <CrudSettingİcon />
        </div>
        <AddList user={user} setUser={setUser} />
      </div>
      <div className=" overflow-auto mt-8">
        <div className="">
          <table className="table-fixed divide-y min-w-full divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4" scope="col">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all"
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                    ></input>
                    <label htmlFor="checkbox-all" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Position
                </th>
                
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Country
                </th>
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Company
                </th>

                <th
                  scope="col"
                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                ></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y  divide-gray-200">
              <CrudList setUser={setUser}  user={searchUser()}/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
