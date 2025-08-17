"use client";

import { cn } from "@/lib/utils";
import { GitHubRepository } from "@/types/github";
import { ClassValue } from "clsx";
import { PreviewUrl } from "./preivew-url";
import { SiGithub } from "react-icons/si";
import { LuArrowUpRight, LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import { TiStarFullOutline } from "react-icons/ti";
import { RiGitForkFill } from "react-icons/ri";
import { formatDate } from "@/utils/time";

// TODO: Add custom animation
// TODO: Button to small
// TODO: Text to small

const getLanguageColor = (language: string | null) => {
  const colors: { [key: string]: string } = {
    JavaScript: "bg-yellow-500",
    TypeScript: "bg-blue-500",
    Python: "bg-green-500",
    Java: "bg-red-500",
    "C++": "bg-purple-500",
    Go: "bg-cyan-500",
    Rust: "bg-orange-500",
    PHP: "bg-indigo-500",
    Ruby: "bg-red-600",
    Swift: "bg-orange-600",
  };
  return colors[language || ""] || "bg-gray-500";
};

export const RepoCardWithImage = ({
  data,
  className,
}: {
  data: GitHubRepository;
  className?: ClassValue;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg border overflow-hidden aspect-video w-full relative bg-neutral-900",
        className
      )}
    >
      {data.homepage && (
        <PreviewUrl
          url={data.homepage}
          width={640}
          height={360}
          className="object-cover object-top w-full relative z-0"
          loading="lazy"
        />
      )}
      <SiGithub className="size-16 absolute z-0" />
      <div className="absolute bottom-0 left-0 text-white z-10 w-full p-4 bg-neutral-800 flex flex-col">
        <p className="font-semibold tracking-tight text-lg">{data.name}</p>
        <div className="flex gap-1">
          <Badge className="bg-neutral-800 text-white">
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
            <Badge className="bg-neutral-800 text-white">
              <RiGitForkFill size={12} />
              {data.forks_count}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export const RepoCard = ({
  data,
  className,
}: {
  data: GitHubRepository;
  className?: ClassValue;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg border overflow-hidden p-4 flex flex-col gap-2 flex-grow aspect-video w-full relative group transition-colors duration-100 hover:border-blue-500",
        className
      )}
      // style={{
      //   backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.1) 1px, transparent 0)`,
      //   backgroundSize: "20px 20px",
      //   backgroundPosition: "center",
      // }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 z-0 bg-blue-500/10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.8) 1px, transparent 0)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "center",
        }}
      />

      <div className="flex items-center gap-1 relative z-10">
        <p className="font-semibold tracking-tight text-lg group-hover:underline">{data.name}</p>
        <LuArrowUpRight size={24} />
      </div>
      <div className="flex-grow relative z-10">
        {!!data.description && (
          <p className="text-pretty font-sans text-xs text-muted-foreground truncate pb-2">
            {data.description}
          </p>
        )}

        {!!data.topics && data.topics.length > 0 && (
          <div className="flex gap-1 flex-wrap-reverse">
            {data.topics.slice(0, 3).map((topic, i) => (
              <Badge key={i} className="bg-secondary text-secondary-foreground">
                #{topic}
              </Badge>
            ))}
            {data.topics.length > 3 && (
              <Badge className="bg-secondary text-secondary-foreground">
                +{data.topics.length - 3}
              </Badge>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-1 relative z-10">
        <Badge className="bg-neutral-800 text-white">
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
          <Badge className="bg-neutral-800 text-white">
            <RiGitForkFill size={12} />
            {data.forks_count}
          </Badge>
        )}
      </div>

      <div className="text-xs text-muted-foreground relative z-10">
        Updated {formatDate(data.updated_at)}
      </div>
    </div>
  );
};

const ButtonRedirect = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: ClassValue;
}) => (
  <Link
    className={cn(
      "items-center rounded-md border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-3 py-1.5",
      className
    )}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);

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
