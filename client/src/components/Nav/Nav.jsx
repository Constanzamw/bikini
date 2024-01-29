"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import "@szhsin/react-menu/dist/index.css";
// import "@szhsin/react-menu/dist/transitions/slide.css";
import { useDispatch, useSelector } from "react-redux";
//import logoindi from "../../assets/logoindi.png"
import logoindi from "../../../public/logoindi.png";;
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
    <nav className="bg-pink-200/55 py-8 px-8 text-artistfont mb-[30px]">
      <div className="flex items-center justify-between">
        <Link href="/">
          <p className="font-rocksalt text-2xl text-pink-600 font-bold font flex items-center gap-x-2">
            <span>Indi Bikinis</span>
            <Image src="/logoindi.png" alt="Logo" width={35} height={35} />
          </p>
        </Link>

        <div className="flex items-center gap-x-8">
          <div className="cursor-pointer" onClick={handleDropdownToggle}>
            <span className="hover:text-primary hover:border-primary pb-1 font-newrocker text-[19px] border-b-[2px] border-gray-200">
              COMPRA TU BIKINI
            </span>
          </div>
          {showDropdown && (
              <ul className="absolute bg-white/25 border border-gray-300 mt-[9rem] p-2">
                <li className="text-black/50 font-bold" onClick={() => handleLinkClick("/corpinos")}>Corpiños</li>
                <li className="text-black/50 font-bold" onClick={() => handleLinkClick("/bombachas")}>Bombachas</li>
                <li className="text-black/50 font-bold" onClick={() => handleLinkClick("/enterizas")}>Enterizas</li>
                <li className="text-black/50 font-bold" onClick={() => handleLinkClick("/kids")}>Kids</li>
              </ul>
            )}

          <Link href="/about">
            <p className="hover:text-primary hover:border-primary pb-1 font-newrocker text-[19px] border-b-[2px] border-gray-200">
              CUAL ES MI TALLE?
            </p>
          </Link>

          <Link href="/auth">
            <p className="hover:text-primary cursor-pointer hover:border-primary pb-1 font-newrocker text-[19px] border-b-[2px] border-gray-200">
              LogIn
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};