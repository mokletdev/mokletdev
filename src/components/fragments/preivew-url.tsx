"use client";

import { cn } from "@/lib/utils";
import { useMemo } from "react";
import Image, { ImageProps } from "next/image";
import queryString from "query-string";

interface PreviewUrlProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  delay?: number;
}

export const PreviewUrl = ({
  url,
  className,
  width = 300,
  height = 200,
  alt = "",
  delay = 0,
  ...props
}: PreviewUrlProps) => {
  const previewHeight = Math.ceil(1080 / height);

  const imageUrl = useMemo(() => {
    const params = queryString.stringify({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * previewHeight,
      "viewport.height": height * previewHeight,
      waitForTimeout: delay,
    });
    return `https://api.microlink.io/?${params}`;
  }, []);

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

// const shotSrc = (
//   pageUrl: string,
//   w: number,
//   h: number,
//   opts?: { delay?: number; dpr?: number }
// ) => {
//   const dpr = opts?.dpr ?? 2;
//   const qs = new URLSearchParams({
//     url: pageUrl,
//     w: String(Math.round(w * dpr)),
//     h: String(Math.round(h * dpr)),
//     delay: String(opts?.delay ?? 0),
//   });
//   return `/api/shot?${qs.toString()}`;
// };
