// Import
import { createPortal } from "react-dom";

// Toast component
export default function Toast({ message }) {
  // JSX Output
  return createPortal(
    <div className="fixed inset-0 flex w-screen justify-center p-4">
      <p className="text-center text-white py-1 px-2 bg-green-500 rounded-lg h-min">
        {message}
      </p>
    </div>,
    document.querySelector("body")
  );
}
