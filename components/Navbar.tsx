import {
  ArrowUpRightFromSquare,
  BellIcon,
  RefreshCwIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-14">
      <nav className="items-center py-8 shadow-sm">
        <div className="w-full defaultFlex">
          <Image src={logo} alt="logo" width={100} height={40} />
          <div className="defaultFlex w-[15%] ">
            <SearchIcon size={20} />
            <BellIcon size={20} />
            <div>
              <Image
                src="https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <SettingsIcon size={20} />
          </div>
        </div>
      </nav>

      <div className="py-8 w-full defaultFlex">
        <Link
          href="https://www.essen.com/"
          target="blank"
          className="flex items-center"
        >
          <span className="text-xl text-blue-700">www.essen.com</span>{" "}
          <ArrowUpRightFromSquare size={16} className="ml-4 mt-1" />
        </Link>
        <RefreshCwIcon size={20} />
      </div>
    </div>
  );
};

export default Navbar;
