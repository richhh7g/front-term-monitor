import Image, { ImageProps } from "next/image";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Property } from "csstype";

export type ResponsiveImageProps = Omit<ImageProps, "width" | "height"> & {
  fit?: Property.ObjectFit;
};

export const ResponsiveImage = (props: ResponsiveImageProps) => {
  const { src, alt, className, fit, style, ...rest } = props;

  return (
    <figure className={twMerge(["relative w-full", className])}>
      <Image
        src={src}
        fill
        alt={alt}
        style={{ objectFit: fit, ...style }}
        {...rest}
      />
    </figure>
  );
};
