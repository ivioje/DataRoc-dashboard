"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {ArrowUpRightFromSquare, BellIcon, RefreshCwIcon, SearchIcon, SettingsIcon} from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <nav className="items-center py-6 w-full shadow-sm xl:px-11 lg:px-9 sm:px-6 px-3">
        <div className="w-full defaultFlex">
          <Link href='/dashboard' onClick={()=> router.refresh()}>
            <Image src={logo} alt="logo" width={80} height={38} />
          </Link>
          <div className="defaultFlex xl:w-[15%] lg:w-[20%] md:w-[25%] sm:w-[30%] xs:w-[35%] w-[40%]">
            <SearchIcon size={18} className="sm:block hidden" />
            <SearchIcon size={20} className="sm:hidden block" />
            <BellIcon size={18} className="sm:block hidden" />
            <BellIcon size={20} className="sm:hidden block" />
            <div>
              <Image
                src="https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <SettingsIcon size={18} className="sm:block hidden" />
            <SettingsIcon size={20} className="sm:hidden block" />
          </div>
        </div>
      </nav>

      <div className="py-6 w-full defaultFlex px-3 xl:px-11 lg:px-9 sm:px-6">
        <Link
          href="https://www.essen.com/"
          target="blank"
          className="flex items-center"
        >
          <span className="sm:text-lg text-base text-blue-700">www.essen.com</span>{" "}
          <ArrowUpRightFromSquare size={15} className="ml-4 mt-1" />
        </Link>
        <RefreshCwIcon size={18} onClick={()=> router.refresh()} />
      </div>
    </div>
  );
};

export default Navbar;
