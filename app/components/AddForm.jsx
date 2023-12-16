"use client"
import React, { useState,useEffect } from 'react'
import { Formik } from 'formik'
export default function AddForm({user,setUser,toggleModal}) {
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [department, setDepartment] = useState('');
    const [country,setCountry]=useState('')
    const [photo,setPhoto]=useState('')
    const [company, setCompany] = useState('');
  
      
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Kullanıcı bilgilerini al
        const userData = {
          name: name,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          department: department,
          company: company,
          photo:photo,
          country:country
        };
    
        // Yeni kullanıcıyı kullanıcı listesine ekle ve setUser ile state'i güncelle
        setUser([...user, { ...userData, id: Math.random().toString() }]);
    
        // Formu sıfırla
        setName('');
        setEmail('');
        setLastName('');
        setPhoneNumber('');
        setDepartment('');
        setCompany('');
        setPhoto('');
        // Diğer state'leri sıfırla...
    toggleModal()
        // Modalı kapat ve kullanıcıları konsolda göster
      };
    
  return (
    <div>
        
            <form action="" onSubmit={handleSubmit} className="grid grid-cols-2 gap-8 p-4">
                <div className="flex flex-col">
                  <label
                    className="font-medium sm:text-lg text-sm leading-5 text-[#111827]"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                  onChange={(e)=>setName(e.target.value)}
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base"
                    required
                    type="name"
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
                  onChange={(e)=>setLastName(e.target.value)}
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base"
                    required
                    type="name"
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
                  onChange={(e)=>setEmail(e.target.value)}
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base"
                    required
                    type="email"
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
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base "
                    required
                    type="number"
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
                    onChange={(e)=>setDepartment(e.target.value)}
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base "
                    required
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
                  onChange={(e)=>setCompany(e.target.value)}
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base "
                    required
                    type="number"
                    id="company"
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
                  onChange={(e)=>setCountry(e.target.value)}
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base "
                    required
                    type="text"
                    id="country"
                    />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-medium sm:text-lg text-sm leading-5 text-[#111827]"
                    htmlFor="profile photo"
                  >
                    Profile Photo
                  </label>
                  <input
                  onChange={(e)=>setPhoto(e.target.files[0])}
                    className="shadow-sm mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-300 focus:border-cyan-600 block w-full h-12 p-2.5 placeholder:text-sm sm:placeholder:text-base "
                    required
                    type="file"
                    id="profile photo"
                    accept="image/jpeg, image/png"
                    />
                </div>
              <div className="flex justify-between items-start p-5 border-t  rounded-t">
              <button
            type="submit"
            className="text-white w-28 h-12 bg-cyan-600 cursor-pointer  hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add User
            </button>

          </div>
              </form>
    </div>
  )
}
