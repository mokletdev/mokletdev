"use client";
import { DotPattern } from "@/components/fragments/dot-pattern";
import { Heading } from "@/components/fragments/heading";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubUserLite } from "@/types/github";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

export const ContributeSection = ({
  members,
}: {
  members: GitHubUserLite[];
}) => {
  return (
    <section
      id="Contribute"
      className="@container/contribute w-full flex flex-col items-center py-36 gap-8 relative"
    >
      <DotPattern className="[mask-image:radial-gradient(24rem_circle_at_center,white,transparent)] z-0 opacity-50" />
      <Heading
        title="Contribute to the project"
        description="Join our community of contributors and help us build something great! Whether you're a developer, designer, or just passionate about the project, your contributions are welcome."
        className="relative z-10"
      />
      <div className="flex flex-wrap items-center justify-center gap-1 max-w-2xl relative z-10">
        {members.map((member) => (
          <Tooltip key={member.id}>
            <TooltipTrigger asChild>
              <Link
                href={member.html_url}
                target="_blank"
                className="size-12 rounded-full overflow-hidden border hover:outline-2"
              >
                <Image
                  src={member.avatar_url}
                  alt={member.login}
                  width={48}
                  height={48}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="font-mono">
              {member.login}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>{" "}
      <Button
        variant="outline"
        className="font-mono group hover:pr-8! focus:pr-8! duration-500 overflow-hidden relative z-10"
        asChild
      >
        <Link href="https://github.com/mokletdev" target="_blank">
          <FaGithub className="group-hover:text-accent-foreground group-focus:text-accent-foreground transition-color duration-300" />
          Start Contributing!
          <LuArrowUpRight className="absolute right-3 group-hover:translate-y-0 translate-y-1/2 group-focus:opacity-100 group-hover:opacity-100 opacity-0 transition-all duration-500" />
        </Link>
      </Button>
    </section>
  );
};
