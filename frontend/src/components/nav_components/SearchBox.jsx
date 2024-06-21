import { useRef, useState, useEffect } from "react";

export default function SearchBox() {
  const [Menu, setMenu] = useState(false);
  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };

  const handleEvent = (event) => {
    if (event.key === "Escape") {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEvent);
    };
  }, []);

  return (
    <div className="h-full mx-20 flex flex-col items-center justify-center relative">
      <div className="h-[60%] flex items-center bg-[#aaadaf] hover:bg-[#c6cacd] hover:cursor-pointer rounded-full">
        <button onClick={() => setMenu(true)}>
          <div className="h-[100%] w-44 flex justify-center items-center rounded-large gap-3">
            <i className="fa-solid font-semibold !text-2xl fa-magnifying-glass"></i>
            <p className="font-semibold text-[30px]">Search</p>
          </div>
        </button>
      </div>
      {Menu && (
        <div
          ref={menuRef}
          className="-translate-x-14 border-2 border-[#30363d] flex flex-col items-center top-2 bg-[#415262] rounded-xl absolute w-[750px] h-auto"
        >
          <div className="flex w-[95%] pl-3 outline bg-neutral-300 h-11 items-center my-3 rounded-md">
            <i className="fa-solid font-semibold !text-[26px] fa-magnifying-glass"></i>
            <input
              type="text"
              className="bg-neutral-300 h-10 w-full flex mr-auto my-4 text-[26px] outline-none rounded-md px-2"
              placeholder="Type here to Search Song or Genre"
              autoFocus
            />
          </div>
        </div>
      )}
    </div>
  );
}
