"use client";
import { GitHubUserLite } from "@/types/github";
import Image from "next/image";
import Link from "next/link";

export const ContributeSection = ({
  members,
}: {
  members: GitHubUserLite[];
}) => {
  return (
    <section
      id="Contribute"
      className="@container/contribute w-full flex flex-col items-center py-36"
    >
      <h2 className="text-2xl lg:text-5xl font-bold font-rubik text-center w-full sm:max-w-2xl mb-1 lg:mb-2">
        Contribute to the project
      </h2>
      <p className="text-center text-sm lg:text-base w-full sm:max-w-2xl mb-8 text-muted-foreground">
        {
          "Join our community of contributors and help us build something great! Whether you're a developer, designer, or just passionate about the project, your contributions are welcome."
        }
      </p>
      <div className="flex flex-wrap items-center justify-center gap-1 max-w-lg">
        {members.map((member) => (
          <Link
            href={member.html_url}
            target="_blank"
            key={member.id}
            className="size-12 rounded-full overflow-hidden border hover:outline-2"
          >
            <Image
              src={member.avatar_url}
              alt={member.login}
              width={48}
              height={48}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
