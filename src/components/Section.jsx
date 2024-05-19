// Section component
export default function Section({
  title,
  children,
  backgroundImage,
  id,
  className,
  fullWidth,
}) {
  // JSX Output
  return (
    <div
      id={id}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`mx-auto px-4 sm:px-6 lg:px-8 bg-center bg-cover text-white pt-8 pb-10 md:pb-12 ${className}`}
    >
      <div className={`${!fullWidth && "max-w-screen-xl"} mx-auto`}>
        <h1 className="text-center text-wrap  text-3xl md:text-4xl  font-semibold">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
