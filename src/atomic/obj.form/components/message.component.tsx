import { forwardRef, HTMLAttributes } from "react";
import { useFormField } from "./field.component";
import { twMerge } from "tailwind-merge";

export const FormMessage = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={twMerge("text-sm font-medium text-red-600", className)}
      {...props}
    >
      X {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";
