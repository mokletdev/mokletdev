"use client";

import { cn } from "@/lib/utils";
import { GitHubRepository } from "@/types/github";
import { ClassValue } from "clsx";
import { PreviewUrl } from "./preivew-url";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
import { TiStarFullOutline } from "react-icons/ti";
import { RiGitForkFill } from "react-icons/ri";
import { formatDate } from "@/utils/time";
import { getLanguageColor } from "@/utils/colors";

// TODO: Add custom animation
// TODO: Button to small
// TODO: Text to small

export const RepoCard = ({
  data,
  className,
}: {
  data: GitHubRepository;
  className?: ClassValue;
}) => {
  const hasHomepage = !!data.homepage?.length;

  return (
    <Link
      href={data.html_url}
      target="_blank"
      className={cn(
        "rounded-lg border overflow-hidden aspect-video w-full relative transition-all duration-300 group hover:border-accent hover:shadow-lg shadow-none shadow-accent/20",
        hasHomepage ? "" : "p-4 flex flex-col gap-2 hover:bg-accent/10",
        className
      )}
    >
      {/* <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity  duration-300 z-0 bg-accent/10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.58 0.22 27) 1px, transparent 0)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "center",
        }}
      /> */}

      {hasHomepage ? (
        <>
          {data.homepage && (
            <PreviewUrl
              url={data.homepage}
              width={640}
              height={360}
              className="object-cover object-top w-full relative z-0 bg-muted"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/fallback-image.png"
              delay={3000}
            />
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-background transition-all duration-300 z-5 group-hover:translate-y-0 translate-y-[calc(100%-5.25rem)]" />
          <div className="absolute bottom-0 left-0 w-full z-10 p-4 flex flex-col gap-2 h-full group-hover:translate-y-0 translate-y-[calc(100%-5.25rem)] group-hover:bg-accent/10 transition-all duration-300 backdrop-blur border-t">
            <CardTitle data={data} />
            <CardDescription
              data={data}
              className="group-hover:opacity-100 opacity-0 overflow-hidden transition-all  duration-300"
            />
            <CardFooter
              data={data}
              className="group-hover:opacity-100 opacity-0 overflow-hidden transition-all  duration-300"
            />
          </div>
          <CardStatistic
            data={data}
            className="group-hover:-translate-y-6 transition-all  duration-300 absolute z-10 bottom-4 left-4"
          />
        </>
      ) : (
        <>
          <CardTitle data={data} />
          <CardDescription data={data} />
          <CardStatistic data={data} />
          <CardFooter data={data} />
        </>
      )}
    </Link>
  );
};

export const CardTitle = ({
  data,
  className,
}: {
  data: GitHubRepository;
  className?: ClassValue;
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <p className="font-semibold tracking-tight text-lg">{data.name}</p>
      <LuArrowUpRight
        size={24}
        className="group-hover:text-accent-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </div>
  );
};

export const CardDescription = ({
  data,
  className,
}: {
  data: GitHubRepository;
  className?: ClassValue;
}) => {
  return (
    <div className={cn("flex-grow", className)}>
      {!!data.description && (
        <p className="text-pretty font-sans text-xs text-muted-foreground truncate pb-2">
          {data.description}
        </p>
      )}

      {!!data.topics && data.topics.length > 0 && (
        <div className="flex gap-1 flex-wrap-reverse">
          {data.topics.slice(0, 3).map((topic, i) => (
            <Badge key={i} className="bg-secondary text-muted-foreground">
              #{topic}
            </Badge>
          ))}
          {data.topics.length > 3 && (
            <Badge className="bg-secondary text-muted-foreground">
              +{data.topics.length - 3}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export const CardStatistic = ({
  data,
  className,
}: {
  data: GitHubRepository;
  className?: ClassValue;
}) => {
  return (
    <div className={cn("flex gap-1", className)}>
      <Badge className="bg-muted text-primary">
        <div
          className={`size-2.5 mr-1 rounded-full ${getLanguageColor(
            data.language
          )}`}
        />
        {data.language ?? "unknown"}
      </Badge>
      {data.stargazers_count > 0 && (
        <Badge className="bg-amber-500 text-white">
          <TiStarFullOutline size={12} />
          {data.stargazers_count}
        </Badge>
      )}{" "}
      {data.forks_count > 0 && (
        <Badge className="bg-primary text-primary-foreground">
          <RiGitForkFill size={12} />
          {data.forks_count}
        </Badge>
      )}
    </div>
  );
};

export const CardFooter = ({
  data,
  className,
}: {
  data: GitHubRepository;
  className?: ClassValue;
}) => {
  return (
    <div className={cn("text-xs text-muted-foreground", className)}>
      Updated {formatDate(data.updated_at)}
    </div>
  );
};

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) => (
  <div
    className={cn(
      "rounded font-semibold px-1.5 py-0.5 text-xs flex items-center gap-0.5 font-mono",
      className
    )}
  >
    {children}
  </div>
);
