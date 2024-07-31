import { Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type CommandProps = ComponentPropsWithoutRef<typeof CommandPrimitive>;

export const Command = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  CommandProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={twMerge(
      "relative flex h-full w-full flex-col rounded-md bg-white text-gray-800",
      className
    )}
    {...props}
  />
));

Command.displayName = CommandPrimitive.displayName;
