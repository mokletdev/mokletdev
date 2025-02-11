import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";
import { Spotlight } from "../ui/spotlight";

interface Props {
  className?: ClassValue;
  containerClassName?: ClassValue;
}

export const ProjectCard = ({ className, containerClassName }: Props) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl p-[1px] bg-neutral-950/50",
        containerClassName
      )}
    >
      <Spotlight
        className="blur-3xl from-amber-300 via-amber-400 to-amber-500"
        size={200}
      />
      <div className="relative h-full w-full rounded-xl bg-neutral-800 overflow-hidden">
        <div className="w-full aspect-video bg-neutral-950"></div>
        <div className="w-full p-2">
          <h5 className="text-lg font-rubik font-medium">my-moklet-org</h5>
        </div>
      </div>
    </div>
  );
};
