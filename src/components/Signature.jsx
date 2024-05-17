// Signature component
export default function Signature({ text, onClick, className, isSelected }) {
  // JSX Output
  return (
    <p
      onClick={onClick}
      className={`md:text-lg bg-yellow-400 text-black rounded text-center font-semibold py-1 mt-1 ${
        isSelected && "!bg-red-600 text-white"
      } ${className}`}
    >
      {text}
    </p>
  );
}
