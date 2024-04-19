import React, { useState } from "react";
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

// Importar tus páginas
import Dashboard from "../pages/dashboard.js";
import ChoferesPage from "../pages/choferes.js";
import Comments from "../pages/Comments.js";
import Analytics from "../pages/Analytics.js";
import Messages from "../pages/Messages.js";
import Integration from "../pages/Integration.js";
import Settings from "../pages/Settings.js";
import More from "../pages/More.js";

function SideNavbar() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const pages = {
    Dashboard: <Dashboard />,
    ChoferesPage: <ChoferesPage />,
    Comments: <Comments />,
    Analytics: <Analytics />,
    Messages: <Messages />,
    Integration: <Integration />,
    Settings: <Settings />,
    More: <More />
  };

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 shadow-md">
          <div className="flex flex-col justify-start item-center">
            <div className="flex justify-center items-center mb-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={60} 
              height={60} 
            />
            </div>
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              TRANSPORTES GAGO
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-royalblue1 hover:text-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" onClick={() => setCurrentPage("Dashboard")}>
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Dashboard
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-royalblue1 hover:text-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" onClick={() => setCurrentPage("ChoferesPage")}>
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Choferes
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-royalblue1 hover:text-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" onClick={() => setCurrentPage("Comments")}>
                <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Comments
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-royalblue1 hover:text-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" onClick={() => setCurrentPage("Analytics")}>
                <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Analytics
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-royalblue1 hover:text-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" onClick={() => setCurrentPage("Messages")}>
                <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Messages
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-royalblue1 hover:text-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" onClick={() => setCurrentPage("Integration")}>
                <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Integration
                </h3>
              </div>
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" onClick={() => setCurrentPage("Settings")}>
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" onClick={() => setCurrentPage("More")}>
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  More
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200 hover:bg-red-600 hover:text-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" onClick={() => setCurrentPage("Logout")}>
                <MdOutlineLogout className="text-2xl text-red-600 group-hover:text-white" />
                <h3 className="text-base text-red-600 group-hover:text-white font-semibold">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
      <div className="ml-60"> {/* Ajusta el margen izquierdo según el ancho de tu sidebar */}
        {pages[currentPage]}
      </div>
    </div>
  );
}

export default SideNavbar;
