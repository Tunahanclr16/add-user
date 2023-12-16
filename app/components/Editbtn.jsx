import React from "react";
import { IoMdClose } from "react-icons/io";
import { useState,useEffect } from "react";
export default function Editbtn({user,updateUser }) {
  const [showModal, setShowModal] = useState(false);

  const [firstName, setFirstName] = useState(user.firstName || ''); // Varsayılan değer boş bir string
  const [lastName, setLastName] = useState(user.lastName || '');
  const [email, setEmail] = useState(user.email || '');
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '' );
  const [department, setDepartment] = useState(user.department || '' );
  const [company, setCompany] = useState(user.company || '' );
  const [country, setCountry] = useState(user.country || '' );

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log('tıklandı');
  };
// İzlenen state'ler burada belirtilmelidir
const handleSave = (e) => {
  e.preventDefault();
  const updatedUserData = {
    firstName,
    lastName,
    email,
    phoneNumber,
    department,
    company,
    country,
  };
  
  // updateUser(updatedUserData); // Bu satırı yorum satırına alabilirsiniz, çünkü aşağıda zaten state'leri güncelliyorsunuz

  // State'leri güncel verilere göre sıfırlama
  setFirstName('');
  setLastName('');
  setEmail('');
  setPhoneNumber('');
  setDepartment('');
  setCompany('');
  setCountry('');
  // Diğer state'leri de benzer şekilde sıfırlayabilirsiniz

  console.log('Güncellenen Kullanıcı Verileri:', updatedUserData);

  // Diğer state'ler için de benzer şekilde güncelleme yapılmalı
  toggleModal();
};

  return (
    <>
<div>
<button
        onClick={toggleModal}
        type="button"
        className="text-white h-10 bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
      >
        <svg
          className="mr-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
          <path
            fillRule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Edit user
      </button>
</div>
   <div className="flex justify-center items-center">
   {
        showModal &&(
            <div className="fixed max-w-2xl mx-auto   z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="bg-white rounded-lg w-full h-[630px] shadow relative">
                <div className="flex justify-between items-start p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold">Edit user</h3>
                  <div className="flex mt-3 " onClick={toggleModal}>
                    <IoMdClose className="cursor-pointer" />
                  </div>
                </div>
              <div className="p-2">
              <form action="" onSubmit={handleSave} className="grid grid-cols-2 gap-8 p-4">
                <div className="flex flex-col">
                  <label
                    className="font-medium sm:text-lg text-sm leading-5 text-[#111827]"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base"
                    required
                    type="name"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    id="firstName"
                    placeholder="Bonnie"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-medium sm:text-lg text-sm leading-5 text-[#111827]"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base"
                    required
                    type="name"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    id="lastName"
                    placeholder="Green"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-medium sm:text-lg text-sm leading-5 text-[#111827]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base"
                    required
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    id="lastName"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-medium sm:text-lg text-sm leading-5 text-[#111827]"
                    htmlFor="lastName"
                  >
                    Phone Number
                  </label>
                  <input
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base "
                    required
                    type="number"
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    id="tel"
                    name='phone'
                    placeholder="e.g +(12)3456 789"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-medium sm:text-lg text-sm leading-5 text-[#111827]"
                    htmlFor="department"
                  >
                    Department
                  </label>
                  <input
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base "
                    required
                    value={department}
                    onChange={(e)=>setDepartment(e.target.value)}
                    type="text"
                    id="department"
                    placeholder="Development"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-medium sm:text-lg text-sm leading-5 text-[#111827]"
                    htmlFor="company"
                  >
                    Company
                  </label>
                  <input
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base "
                    required
                    type="number"
                    id="company"
                    value={company}
                    onChange={(e)=>setCompany(e.target.value)}
                    placeholder="123456"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-medium sm:text-lg text-sm leading-5 text-[#111827]"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base "
                    required
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e)=>setCountry(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-medium sm:text-lg text-sm leading-5 text-[#111827]"
                    htmlFor="profile photo"
                  >
                    Profile Photo
                  </label>
                  {/* <input
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base "
                    required
                    value={photo}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    type="file"
                    id="profile photo"
                    accept="image/jpeg, image/png"
                    /> */}
                </div>
              <div className="flex justify-between items-start p-5 border-t  rounded-t">
              <button
            type="submit"
            className="text-white w-28 h-12 bg-cyan-600 cursor-pointer  hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Save all
            </button>

          </div>
              </form>
              </div>
              </div>
            </div>
          </div>
        )
      }
   </div>
    </>
  );
}
