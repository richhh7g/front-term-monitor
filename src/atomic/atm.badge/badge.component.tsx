import * as React from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex items-center rounded-md border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default: "border-transparent bg-gray-800 text-white hover:bg-gray-950",
      secondary: "border-transparent bg-white text-gray-800 hover:bg-gray-100",
      tertiary:
        "border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300",
      destructive: "border-transparent bg-red-600 text-red-50 hover:bg-red-700",
      outline: "text-gray-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <span
      className={twMerge(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};
