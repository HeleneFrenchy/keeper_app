import {
  Bars3Icon,
  UserIcon,
  SunIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useDarkMode } from "./DarkModeContext";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const changeMode = () => {
    if (isDarkMode == false) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex items-center justify-between flex-wrap bg-purple-500 dark:bg-blue-950 py-3">
      <div className="flex">
        <div className="pr-3">
          <Bars3Icon className="h-6 w-6 text-white" onClick={toggleSidebar} />
        </div>

        <div className="text-white">KEEPER</div>
      </div>
      {showSidebar && <Sidebar />}

      <div className=" text-white flex">
        <div className="pr-3">
          <PlusCircleIcon className="h-6 w-6" />
        </div>
        <div className="pr-3">
          <UserIcon className="h-6 w-6" />
        </div>
        <button onClick={changeMode} className="pr-3">
          <SunIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
