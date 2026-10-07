import Image from "next/image";
import { Button } from "@heroui/react";
import Navbar from "./Navbar";
import Marquee from "./Marquee";

const Header = () => {
  const today = new Date().toLocaleDateString("bn-BD", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
        <div className="max-w-7xl mx-auto" >
        <div className="relative flex items-center justify-center">
          {/* Logo Button */}
      <div className="flex justify-center items-center gap-2">
    
        <div>
          <Image src="/logo.webp" alt="Hero image" width={40} height={20} />
        </div>

        <div>
          <h1 className=" text-2xl font-bold text-red-600"> Bangla News 24</h1>
          <p>{today}</p>
        </div>
        </div>
        {/* Logo Button */}

        {/* button div */}
        <div className="absolute right-0 flex items-center gap-3 ">
            <Button variant="danger">সাইন আপ</Button>
        <Button variant="ghost"> সাইন ইন</Button>
        </div>
        {/* button div */}
           
        </div>
      </div>

      <Navbar></Navbar>
      <Marquee></Marquee>
    </div>
  );
};

export default Header;
