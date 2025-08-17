"use client";

import { cn } from "@/lib/utils";
import { GitHubRepository } from "@/types/github";
import { ClassValue } from "clsx";
import { PreviewUrl } from "./preivew-url";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import { TiStarFullOutline } from "react-icons/ti";
import { RiGitForkFill } from "react-icons/ri";

// TODO: Add custom animation
// TODO: Button to small
// TODO: Text to small

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
        "rounded-lg border overflow-hidden p-4 flex flex-col gap-2 flex-grow aspect-video w-full",
        className
      )}
    >
      <p className="font-semibold tracking-tight text-lg">{data.name}</p>
      <div className="flex gap-1">
        <Badge className="bg-neutral-800 text-white">
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
      <p className="max-w-full text-pretty font-sans text-xs text-muted-foreground flex-grow truncate">
        {data.description}
      </p>
      <div className="flex gap-1 flex-wrap-reverse">
        {data.topics?.map((topic, i) => (
          <Badge key={i} className="bg-secondary text-secondary-foreground">
            #{topic}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        {data.html_url && (
          <ButtonRedirect href={data.html_url}>
            <SiGithub size={18} /> Github
          </ButtonRedirect>
        )}
        {/* {data.homepage && (
          <ButtonRedirect href={data.homepage}>
            <LuExternalLink size={18} /> Live
          </ButtonRedirect>
        )} */}
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
      "rounded border font-semibold border-transparent px-1.5 py-0.5 text-xs flex items-center gap-0.5 font-mono",
      className
    )}
  >
    {children}
  </div>
);
