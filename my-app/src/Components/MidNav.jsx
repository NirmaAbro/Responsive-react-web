import React from "react";
import { FaStore } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import user from "../images/User.svg";

function MidNav() {
  return (
    <div>
      <nav className="w-full h-full bg-black   px-4 md:px-5 mt-3 ">
        <div className="flex  justify-between mt-3">
          <div className="flex justify-normal pt-1">
            <div>
              <FaStore className="text-indigo-500 text-3xl" />
            </div>
            <div className="text mt-1">
              <h2 className="font-bold text-white pl-1">NFT Marketplace </h2>
            </div>
          </div>
          {/* ulll  */}

          <ul className="md:flex hidden font-semibold cursor-pointer  mt-2">
            <li className="mx-3 cursor-pointer  text-white">MarketPlace</li>
            <li className="mx-3 cursor-pointer text-white ">Ranking</li>
            <li className="mx-3 cursor-pointer  text-white">
              Contact a wallet
            </li>
          </ul>
          {/* button  */}
          <div className=" hidden md:block">
            <div>{/* <img src={user} /> */}</div>

            <div className="p-1 bg-indigo-500 text-white rounded-xl m-2 px-3">
              {/* <IoMdLogIn className="text-white " /> */}
              SignUp
            </div>
          </div>
          <div className="md:hidden text-white">
            <a href="" className="text-white ">
              {" "}
              <span className="h-6 w-6  text-white">&#8801;</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MidNav;
