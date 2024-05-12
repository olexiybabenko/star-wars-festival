import { useState } from "react";
import MobileHeaderElement from "./MobileHeaderElement";

// MobileHeader component
export default function MobileHeaderMenu({ headerElements }) {
  // useState - watch if mobile menu is opened
  const [isOpened, setIsOpened] = useState(false);
  // handleOpen - Open menu
  function handleOpen() {
    // watch with useState
    setIsOpened(true);
  }
  // handleClose - Close menu
  function handleClose() {
    // watch with useState
    setIsOpened(false);
  }

  // JSX Output
  return (
    <>
      {/* Hamburger icon that opens the mobile menu*/}
      <button
        onClick={!isOpened ? handleOpen : undefined}
        className={`md:hidden py-3 px-1 transition ${
          !isOpened && " border-2 border-white rounded"
        }`}
      >
        {/* 3 lines that change into a cross*/}
        <div
          onClick={isOpened ? handleClose : undefined}
          className={`relative z-50 before:z-50 block h-[1px] w-5  content-[''] before:absolute before:h-full before:w-full before:bg-white before:block before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-['']
            ${
              !isOpened
                ? " bg-white  before:top-[-0.35rem] after:bottom-[-0.35rem] "
                : " bg-transparent before:top-0 before:rotate-45 before:transform after:bottom-0 after:-rotate-45 after:transform"
            }
              `}
        ></div>
      </button>
      {/* Sliding menu */}
      <div
        className={`fixed top-0 right-0 z-40 w-[85%] h-full bg-red-600 shadow-2xl px-6 pt-16 overflow-y-auto overscroll-y-none transition duration-500 ${
          isOpened ? "translate-x-0" : "translate-x-full"
        } `}
      >
        {/* List of menu hrefs */}
        <ul className="space-y-5 text-center">
          {/* Mapped menu elements */}
          {headerElements.map((headerElement) => (
            <MobileHeaderElement
              key={headerElement.href}
              onClick={handleClose}
              {...headerElement}
            />
          ))}
        </ul>
      </div>
      {/* Full-screen background with a backdrop blur filter */}
      {isOpened && (
        <div
          onClick={handleClose}
          className="fixed inset-0 h-full w-full  backdrop-blur-sm transform"
        ></div>
      )}
    </>
  );
}
