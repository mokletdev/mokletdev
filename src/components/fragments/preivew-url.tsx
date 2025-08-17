"use client";

import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import queryString from "query-string";
import Image, { ImageProps } from "next/image";

interface PreviewUrlProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const PreviewUrl = ({
  url,
  className,
  width = 300,
  height = 200,
  alt = "",
  ...props
}: PreviewUrlProps) => {
  // scale used to request a sharper screenshot than the rendered size
  const scale = Math.max(1, Math.ceil(1080 / height));
  const imageUrl = useMemo(
    () => shotSrc(url, width * scale, height * scale),
    [url, width, height, scale]
  );

  // console.log(imageUrl);

  return (
    <Image
      src={imageUrl}
      width={width}
      height={height}
      className={cn(className)}
      alt={alt}
      {...props}
    />
  );
};

const shotSrc = (
  pageUrl: string,
  w: number,
  h: number,
  opts?: { delay?: number; dpr?: number }
) => {
  const dpr = opts?.dpr ?? 2;
  const qs = new URLSearchParams({
    url: pageUrl,
    w: String(Math.round(w * dpr)),
    h: String(Math.round(h * dpr)),
    delay: String(opts?.delay ?? 0),
  });
  return `/api/shot?${qs.toString()}`;
};
