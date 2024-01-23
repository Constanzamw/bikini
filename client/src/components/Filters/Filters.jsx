"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";

export default function Filters() {
  const dispatch = useDispatch();
  const router = useRouter();


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
            <Link href="/about">
              <span className="hover:text-primary  hover:border-primary pb-1 font-newrocker text-[19px] border-b-[2px] border-gray-200">
                Conocenos
              </span>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <span className=" hover:text-primary cursor-pointer hover:border-primary pb-1 font-newrocker text-[19px] border-b-[2px]  border-gray-200">
                Cual es mi talle?
              </span>
            </Link>
          </li>
         
        </div>
      </ul>
    </nav>
  );
}
