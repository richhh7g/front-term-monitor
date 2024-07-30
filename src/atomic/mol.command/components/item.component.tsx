import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Command as CommandPrimitive } from "cmdk";

export type CommandItemProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Item
> & {
  value: string;
};
export type CommandItemElement = ElementRef<typeof CommandPrimitive.Item>;

export const CommandItem = forwardRef<CommandItemElement, CommandItemProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Item
      ref={ref}
      className={twMerge(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 hover:bg-gray-100",
        className
      )}
      {...props}
    />
  )
);

CommandItem.displayName = CommandPrimitive.Item.displayName;
