// Import

import MdHeaderElement from "./MdHeaderElement"; // MdHeaderElement component
import MobileHeaderMenu from "./MobileHeader"; // MobileHeaderMenu component

// Header component
export default function Header({ websiteLogo, websiteName, headerElements }) {
  // JSX Output
  return (
    <header className="absolute w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Flex container for header elements */}
        <div className=" flex h-16 items-center justify-between">
          {/* Conditionally display website logo or name on the left */}
          {/* Logo*/}
          {websiteLogo && <img className="h-8" src={websiteLogo} />}
          {/* Name*/}
          {websiteName && (
            <p className="block text-slate-100 uppercase font-medium">
              {websiteName}
            </p>
          )}
          {/* Menu elements for md+ screen  */}
          <ul className="hidden md:flex  items-center gap-6 text-sm">
            {headerElements.map((headerElement) => (
              <MdHeaderElement key={headerElement.href} {...headerElement} />
            ))}
          </ul>
          {/* Up to md: Mobile Header  */}
          <MobileHeaderMenu headerElements={headerElements} />
        </div>
      </div>
    </header>
  );
}
