import React from "react";
import store from "../images/Storefront.svg";
import { FaYoutube } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div className="flex-col bg-black p-4">
      {/* 1st row */}
      <div className="flex items-center">
        <img src={store} alt="Store" className="mr-4" />
        <h1 className="text-white">NFT MarketPlace</h1>
      </div>
      

      {/* 2nd row */}
      <div className="flex flex-col lg:flex-row lg:justify-between mt-4">
        <div className="lg:w-1/2">
          <h1 className="text-white mb-4">NFT MarketPlace UI created</h1>
          <h1 className="text-white mb-4">with anima for figma</h1>
          <h1 className="text-white mb-4">Join our community</h1>
          <div className="flex">
          <div className="text-gray-400 text-3xl p-2"><FaYoutube /></div>
          <div className="text-gray-400 text-3xl p-2"><BsDiscord /></div>
          <div className="text-gray-400 text-3xl p-2"><FaTwitter /></div>
          <div className="text-gray-400 text-3xl p-2"><FaInstagram /></div>
        </div>
        </div>
        {/* [pics ] */}
      
        

        {/* Explore */}
        <div className="lg:w-1/4">
          <h1 className="text-white mb-4 text-3xl">Explore</h1>
          <h1 className="text-white mb-4">Market place and Ranking</h1>
          <h1 className="text-white mb-4">Connect a wallet</h1>
        </div>

        {/* Join our weekly digest */}
        <div className="lg:w-1/4">
          <h1 className="text-white mb-4 text-3xl">Join our weekly digest</h1>
          <h1 className="text-white mb-4">
            Get exclusive promotion and updates
          </h1>
          <h1 className="text-white mb-4">Straight to your inbox</h1>

          {/* <div className="bg-white m-3 rounded-xl">
            <input
              type="text"
              placeholder="Email Address"
              className="px-5 py-1 bg-indigo-500 w-full"
            />
          </div> */}
          <div className="flex bg-white m-3 rounded-xl">
          {/* <div><img src={profile} alt="Profile Icon" className="text-black" /></div> */}
          <div><input type="text" placeholder="Confirmed Password" className="px-4 py-1 bg-indigo-500 rounded-xl" /></div>
        </div>

        {/* last  */}
        
        
        </div>
        
      </div>
      <div className="bg-gray-500 w-full h-1"></div>
    </div>
  );
}

export default Footer;
