import React from "react";
import img from '../images/midpic.png'
import profile from '../images/User.svg'
import lock from "../images/LockKey.svg"


function HerSection() {
  return (
    <div className="bg-black min-h-screen flex flex-col lg:flex-row gap-3.75rem">
      {/* Left column with image (takes full width on mobile and half on larger screens) */}
      <div className="w-full lg:w-1/2">
        <img src={img} alt="Mid Pic" className="w-full h-auto" />
      </div>

      {/* Right column with form */}
      <div className="py-6 gap-20 m-8 w-full lg:w-1/2">
        <div className="text-white ">
          <h1 className="text-5xl font-bold mt-4 p-2">Create Account</h1>
          <p className="pt-2 p-1 ml-2">Welcome! Enter your details and start</p>
          <p className="pt-2 p-1 ml-2">Creating, Collecting, and Selling NFTs</p>
        </div>

        {/* Username */}
        <div className="flex bg-white m-3 rounded-xl">
          <div><img src={profile} alt="Profile Icon" className="text-black p-1" /></div>
          <div><input type="text" placeholder="Username" className="px-5 py-1" /></div>
        </div>

        {/* Email Address */}
        <div className="flex bg-white m-3 rounded-xl">
          <div><img src={lock} alt="Profile Icon" className="text-black p-1" /></div>
          <div><input type="text" placeholder="Email Address" className="px-5 py-1  " /></div>
        </div>

        {/* Password */}
        <div className="flex bg-white m-3 rounded-xl">
          <div><img src={lock} alt="Profile Icon" className="text-black p-1" /></div>
          <div><input type="text" placeholder="Password" className="px-5 py-1  " /></div>
        </div>

        {/* Confirmed Password */}
        <div className="flex bg-white m-3 rounded-xl">
          <div><img src={lock} alt="Profile Icon" className="text-black p-1" /></div>
          <div><input type="text" placeholder="Confirmed Password" className="px-5 py-1" /></div>
        </div>
        {/* create account  */}
        <div className="flex bg-indigo-500 m-3 rounded-xl">
          
          <div><input type="text" placeholder="Create Account " className="px-5 py-1 bg-indigo-500 text-black rounded-xl" /></div>
        </div>
      </div>
    </div>
  );
}

export default HerSection;

