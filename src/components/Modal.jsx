// Import
import Button from "./Button"; // Button component
import Form from "./Form"; // Form component
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Input from "./Input";

// Modal component
export default function Modal({ title, text }) {
  // useState to open the dialog
  const [isOpen, setIsOpen] = useState(false);
  // Define functions to open and close the dialog
  // Open
  function handleOpen() {
    setIsOpen(true);
  }
  // Close
  function handleClose() {
    setIsOpen(false);
  }

  // JSX Output
  return (
    <>
      {/* Button that activates the dialog */}
      <Button
        onClick={handleOpen}
        text={title}
        className="!bg-black hover:!bg-red-600 !text-white md:!mx-0 mt-4"
      />
      {/* Dialog activated by button */}
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50 ">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <div className="max-w-lg w-full border border-white rounded bg-neutral-800 text-white py-5 px-4">
            {/* Close icon */}
            <div className="flex justify-end">
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-none stroke-2 stroke-neutral-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            {/* Title */}
            <h1 className="text-center text-wrap text-lg font-semibold">
              {title}
            </h1>
            {/* Text */}
            <p className="text-center">{text}</p>
            {/* Children  */}
            <Form
              buttonText={"Register"}
              onSubmit={handleClose}
              className={"pt-3"}
            >
              {/* Children  */}
              <Input
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
              />
              <Input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
            </Form>
          </div>
        </div>
      </Dialog>
    </>
  );
}
