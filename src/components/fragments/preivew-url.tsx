"use client";

import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
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
  // const { resolvedTheme } = useTheme();

  const imageUrl = useMemo(() => {
    const scale = Math.ceil(1080 / height);

    const params = queryString.stringify({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * scale,
      "viewport.height": height * scale,
      waitForTimeout: delay,
    });
    return `https://api.microlink.io/?${params}`;
  }, [url, width, height, delay]);

  const fallbacks = useMemo(() => {
    return [
      imageUrl,
      `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`,
      // local placeholder in /public (add your own image there)
      "/fallback-image.png",
    ];
  }, [url, imageUrl]);

  const [idx, setIdx] = useState(0);

  const currentSrc = useMemo(() => {
    const src = fallbacks[Math.min(idx, fallbacks.length - 1)];
    return src;
  }, [fallbacks, idx]);

  return (
    <Image
      src={currentSrc}
      width={width}
      height={height}
      className={cn(className)}
      alt={alt}
      onError={() => {
        // try the next fallback
        if (idx < fallbacks.length - 1) {
          setIdx((i) => i + 1);
        }
      }}
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
