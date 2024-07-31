import { Root } from "@radix-ui/react-label";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { useFormField } from "./field.component";
import { twMerge } from "tailwind-merge";

export const FormLabel = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Root
      ref={ref}
      className={twMerge(
        "font-medium text-sm text-gray-600 cursor-pointer",
        error && "text-sm text-red-600 cursor-pointer",
        className
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";
