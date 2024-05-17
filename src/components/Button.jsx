// Button component
export default function Button({ text, className, onClick, href, props }) {
  // Choose a link or button based on if there is a href provided
  // JSX Output
  return (
    <>
      {href ? (
        <a
          {...props}
          href={href}
          onClick={onClick}
          className={`bg-yellow-400 text-black hover:bg-red-600 hover:text-white hover:shadow-2xl hover:shadow-white py-2 px-3 border  rounded-3xl  block w-min text-nowrap font-semibold mx-auto ${className}`}
        >
          {text}
        </a>
      ) : (
        <button
          {...props}
          onClick={onClick}
          className={`bg-yellow-400 text-black hover:bg-red-600 hover:text-white hover:shadow-2xl hover:shadow-white py-2 px-3 border  rounded-3xl text-nowrap font-semibold block mx-auto ${className}`}
        >
          {text}
        </button>
      )}
    </>
  );
}
