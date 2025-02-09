"use client";

import React, { useEffect } from "react";

export function LocomotiveScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Add locomotive-scroll and handle the import dynamically
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // const locomotiveScroll = new LocomotiveScroll();
      new LocomotiveScroll();
    })();
  }, []);

  return <>{children}</>;
}
