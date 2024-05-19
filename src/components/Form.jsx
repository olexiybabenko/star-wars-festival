// Import
import Button from "./Button"; // Button component

// Form component
export default function Form({
  action,
  onSubmit,
  buttonText,
  className,
  buttonClassName,
  children,
  ...props
}) {
  // JSX Output
  return (
    <form
      action={action}
      onSubmit={onSubmit}
      className={`max-w-80 mx-auto ${className}`}
      {...props}
    >
      {children}
      <Button text={buttonText} className={`mt-3 ${buttonClassName}`} />
    </form>
  );
}
