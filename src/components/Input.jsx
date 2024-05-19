// Input component
export default function Input({ className, ...props }) {
  // JSX Output
  return (
    <input
      className={`block w-full mt-2 rounded py-1.5 px-2 text-neutral-800 shadow-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
      {...props}
    />
  );
}
