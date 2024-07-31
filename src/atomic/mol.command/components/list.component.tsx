import { Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type CommandListElement = ElementRef<typeof CommandPrimitive.List>;
export type CommandListProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.List
>;

export const CommandList = forwardRef<CommandListElement, CommandListProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.List
      ref={ref}
      className={twMerge("relative", className)}
      {...props}
    />
  )
);

CommandList.displayName = CommandPrimitive.List.displayName;
