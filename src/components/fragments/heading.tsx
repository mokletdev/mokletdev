import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export const Heading = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: ClassValue;
}) => {
  return (
    <div className={cn("text-center w-full sm:max-w-2xl", className)}>
      <h2 className="text-2xl lg:text-5xl font-bold font-rubik mb-1 lg:mb-2">
        {title}{" "}
      </h2>
      <p className="text-sm lg:text-base text-muted-foreground">
        {description}
      </p>
    </div>
  );
};
