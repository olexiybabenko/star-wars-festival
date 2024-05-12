// MobileHeaderElement component
export default function MobileHeaderElement({ title, href, onClick }) {
  // JSX Output
  return (
    <li>
      <a
        onClick={onClick}
        className="text-white hover:underline underline-offset-4 decoration-2 decoration-yellow-400 transition"
        href={href}
      >
        {title}
      </a>
    </li>
  );
}
