// Import
import MdHeaderElement from "./MdHeaderElement"; // MdHeaderElement component

// Header component
export default function Header({ websiteLogo, websiteName, headerElements }) {
  // JSX Output
  return (
    <header className="">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Flex container for header elements */}
        <div className="flex h-16 items-center justify-between">
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
          {/* Mobile menu up to md: All the elements should be within label */}
          {/* Burger menu that we see at the header */}
          <label
            className="relative z-40 cursor-pointer px-2 py-4 md:hidden rounded bg-slate-200 p-2"
            for="mobileMenuCheckbox"
          >
            {/* Input element controls all the mobile-menu */}
            <input
              id="mobileMenuCheckbox"
              className="peer hidden"
              type="checkbox"
            />
            {/* Hamburger icon */}
            <div className="relative z-50 block h-[1px] w-5 bg-slate-600 content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-slate-600 before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-slate-600 after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
            {/* Full-screen background with a backdrop blur filter */}
            <div className="fixed inset-0 z-40 hidden h-full w-full bg-slate-200/50 backdrop-blur-sm peer-checked:block">
              &nbsp;
            </div>
            {/* A <div> element for the menu items with an animation, which scrolls the menu from right to left */}
            <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
              {/* Slide menu */}
              <div className="float-right min-h-full w-[85%] bg-slate-900 px-6 pt-12 shadow-2xl">
                {/* Container for hrefs */}
                <div className="mt-6 space-y-5 text-center">
                  <a
                    href="#aboutMe"
                    className="closeMobileMenu block text-slate-100 transition hover:text-slate-200/75"
                  >
                    About me
                  </a>
                  <a
                    href="#competenciesSm"
                    className="closeMobileMenu block text-slate-100 transition hover:text-slate-200/75"
                  >
                    Competencies
                  </a>
                  <a
                    href="#education"
                    className="closeMobileMenu block text-slate-100 transition hover:text-slate-200/75"
                  >
                    Education
                  </a>
                  <a
                    href="#experience"
                    className="closeMobileMenu block text-slate-100 transition hover:text-slate-200/75"
                  >
                    Experience
                  </a>
                  <a
                    href="#awards"
                    className="closeMobileMenu block text-slate-100 transition hover:text-slate-200/75"
                  >
                    Awards
                  </a>
                  <a
                    href="#contacts"
                    className="closeMobileMenu block text-slate-100 transition hover:text-slate-200/75"
                  >
                    Contacts
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}
