"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import "@szhsin/react-menu/dist/index.css";
// import "@szhsin/react-menu/dist/transitions/slide.css";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";

export default function Nav() {
  const dispatch = useDispatch();
  const router = useRouter();
//   const imageLoader = ({ src }) => {
//     return src;
//   };
  //const user = useSelector((state) => state.user.logedInUser);
 // const [userLoaded, setUserLoaded] = useState(false);

//   useEffect(() => {
//     if (user.fullName) {
//       setUserLoaded(true);
//     }
//   }, [user]);

const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLinkClick = (path) => {
    router.push(path);
    setShowDropdown(false);
  };
  

  return (
    <nav className="bg-transparent py-8 px-8 text-artistfont mb-[30px] ">
      <ul className="flex flex-col sm:flex-row  items-center justify-center sm:justify-between gap-8">
        <div className="text-center sm:flex sm:justify-center">
          <li>
            <Link href="/">
              <span className="font-rocksalt text-2xl ">
                India
       
              </span>
            </Link>
          </li>
        </div>
        <div className="flex items-center gap-x-8">
          <li>
            <div
              className="cursor-pointer"
              onClick={handleDropdownToggle}
            >
              <span className="hover:text-primary  hover:border-primary pb-1 font-newrocker text-[19px] border-b-[2px] border-gray-200">
                COMPRA TU BIKINI
              </span>
            </div>
            {showDropdown && (
              <ul className="absolute bg-white border border-gray-300 mt-2 p-2">
                <li onClick={() => handleLinkClick("/corpinos")}>Corpiños</li>
                <li onClick={() => handleLinkClick("/bombachas")}>Bombachas</li>
                <li onClick={() => handleLinkClick("/enterizas")}>Enterizas</li>
                <li onClick={() => handleLinkClick("/kids")}>Kids</li>
              </ul>
            )}
          </li>
        {/* <div className="flex items-center gap-x-8">
        <li>
            <Link href="/about">
              <span className="hover:text-primary  hover:border-primary pb-1 font-newrocker text-[19px] border-b-[2px] border-gray-200">
                COMPRA TU BIKINI
              </span>
            </Link>
          </li> */}
          <li>
            <Link href="/about">
              <span className="hover:text-primary  hover:border-primary pb-1 font-newrocker text-[19px] border-b-[2px] border-gray-200">
                CUAL ES MI TALLE?
              </span>
            </Link>
          </li>
          <li>
            <Link href="/auth">
              <span className=" hover:text-primary cursor-pointer hover:border-primary pb-1 font-newrocker text-[19px] border-b-[2px]  border-gray-200">
                LogIn
              </span>
            </Link>
          </li>
         
        </div>
      </ul>
    </nav>
  );
}
