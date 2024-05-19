// SocialMediaIcon component
export default function SocialMediaIcon({ path, href }) {
  // JSX Output
  return (
    <a href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current stroke-0 fill-current w-6 h-6 hover:fill-white"
        viewBox="0 0 50 50"
      >
        <path d={path}></path>
      </svg>
    </a>
  );
}
