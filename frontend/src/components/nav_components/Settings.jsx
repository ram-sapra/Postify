import { useState, useEffect, useRef } from "react";

export default function Settings() {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setSettingsVisible(false);
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setSettingsVisible(false);
    }
  };

  useEffect(() => {
    if (settingsVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [settingsVisible]);

  return (
    <div className="h-full flex justify-center items-center">
      <div
        onClick={() => setSettingsVisible(!settingsVisible)}
        className="h-full justify-center items-center relative aspect-square flex place-content-center bg-[#aaadaf] rounded-full cursor-pointer"
      >
        <i className="fa-solid !text-[#222] !text-4xl fa-gear"></i>
        <div
          ref={menuRef}
          className={`border-2 border-[#30363d] z-10 flex flex-col items-center top-0 bg-[#415262] rounded-xl absolute w-[400px] h-[300px] transition-all duration-500 ${
            settingsVisible
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Content of the settings menu */}
        </div>
      </div>
    </div>
  );
}
