import { forwardRef, HTMLAttributes } from "react";
import { useFormField } from "./field.component";
import { twMerge } from "tailwind-merge";

export const FormDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={twMerge("text-sm text-gray-600", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";
