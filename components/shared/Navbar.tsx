import {
  ArrowUpRightFromSquare,
  BellIcon,
  RefreshCwIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="items-center py-6 w-full shadow-sm px-12">
        <div className="w-full defaultFlex">
          <Image src={logo} alt="logo" width={80} height={38} />
          <div className="defaultFlex w-[15%] ">
            <SearchIcon size={18} />
            <BellIcon size={18} />
            <div>
              <Image
                src="https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <SettingsIcon size={18} />
          </div>
        </div>
      </nav>

      <div className="py-6 w-full defaultFlex px-12">
        <Link
          href="https://www.essen.com/"
          target="blank"
          className="flex items-center"
        >
          <span className="text-lg text-blue-700">www.essen.com</span>{" "}
          <ArrowUpRightFromSquare size={15} className="ml-4 mt-1" />
        </Link>
        <RefreshCwIcon size={18} />
      </div>
    </div>
  );
};

export default Navbar;
