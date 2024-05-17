// MdMenuElement component
export default function MdHeaderElement({ title, href }) {
  // JSX Output
  return (
    <li>
      <a
        className=" text-white lg:text-lg hover:underline underline-offset-4 decoration-2 decoration-yellow-400 transition"
        href={href}
      >
        {title}
      </a>
    </li>
  );
}
