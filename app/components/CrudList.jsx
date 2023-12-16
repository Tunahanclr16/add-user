"use client"
import { useState,useEffect } from 'react';
import Image from 'next/image'
import Editbtn from './Editbtn';
export default function CrudList({user,setUser}) {
const [editUser, setEditUser] = useState(null);

  const handleDeleteUser = (userId) => {
    const updatedUsers = user.filter((userData) => userData.id !== userId);
    setUser(updatedUsers);
  };
// Kullanıcı verilerini güncelleyen fonksiyon
const updateUser = (updatedUserData) => {
  // Kullanıcıları güncellemek için map fonksiyonunu kullanarak bir kopyasını oluşturuyoruz
  const updatedUsers = user.map((userData) => {
    // Eğer kullanıcının ID'si güncellenen veri ile eşleşiyorsa,
    // bu kullanıcının verilerini güncellenmiş verilerle birleştirerek yeni bir nesne oluşturuyoruz
    if (userData.id === updatedUserData.id) {
      const mergedUserData = { ...userData, ...updatedUserData };
      console.log('Güncellenennen Kullanıcı Verileri:', mergedUserData); // Güncellenen kullanıcı verilerini konsola yazdırma
      return mergedUserData;
    }
    // Eşleşme yoksa, verileri değiştirmeden aynı şekilde geri döndürüyoruz
    return userData;
  });

  // Kullanıcıları güncellemek için setUser fonksiyonunu kullanarak
  // güncellenmiş kullanıcı verileriyle yeni kullanıcı listesini ayarlıyoruz
  setUser(updatedUsers);

  // Edit modunu sonlandırmak için setEditUser fonksiyonunu null olarak ayarlıyoruz
  setEditUser(null);
};
  const handleDeleteAll = () => {
    setUser([]); // Tüm kullanıcıları boş bir diziyle değiştirerek sildim
  };


  return (
    <>
    <>
      {user.length === 0 ? (
        <tr>
          <td colSpan="6">User Ekle</td>
        </tr>
      ) : (
        user.map((userData, i) => (
          <tr key={i} className="hover:bg-gray-100" >
            <td className="p-4 w-4">
              <div className="flex items-center">
                <input
                  id={`checkbox-${i}`}
                  aria-describedby={`checkbox-${i}`}
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                ></input>
                <label htmlFor={`checkbox-${i}`} className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
              <div>
                <Image
                  src={userData.photo}
                  className="h-10 w-10 rounded-full object-cover"
                  alt="Picture of the author"
                  height={100}
                  width={100}
                />
              </div>
              <div className="text-sm font-normal text-gray-500">
                <div className=" flex sm:text-lg text-base font-semibold text-gray-900">
                  <h2 className='flex gap-1'>
                    {userData.name}
                    <span>
                      {userData.lastName}
                    </span>
                  </h2>
                </div>
                <div className="text-sm font-normal text-gray-500">
                  {userData.email}
                </div>
              </div>
            </td>
            <td className="p-4 whitespace-nowrap sm:text-lg text-base font-medium text-gray-900">
              Front-end developer
            </td>
            <td className="p-4 whitespace-nowrap sm:text-lg text-base font-medium text-gray-900">
              {userData.country}
            </td>
            <td className="p-4 whitespace-nowrap sm:text-lg text-base font-medium text-gray-900">
              {userData.phoneNumber}
            </td>
            <td className="p-4 whitespace-nowrap sm:text-lg text-base font-medium text-gray-900">
              {userData.company}
            </td>
            <td className="p-4 whitespace-nowrap sm:text-lg text-base font-normal text-gray-900">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                Active
              </div>
            </td>
            <td className="p-4 flex items-center whitespace-nowrap space-x-2">
            <Editbtn updateUser={updateUser} user={userData} />
              <button
                type="button"
                onClick={() => handleDeleteUser(userData.id)} // onClick olayını ekleyin
                className="text-white h-10 bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fillRule="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Delete user
              </button>
            </td>
          </tr>
        ))
      )}
    </>
    </>
  )
}

