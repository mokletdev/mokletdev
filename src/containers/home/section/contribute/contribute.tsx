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
      <div className="flex flex-wrap items-center justify-center gap-1 max-w-lg">
        {members.map((member) => (
          <Link href={member.html_url} target="_blank" key={member.id}>
            <div className="size-12 rounded-full overflow-hidden border">
              <Image
                src={member.avatar_url}
                alt={member.login}
                width={48}
                height={48}
              />
            </div>
            {/* {member.login} */}
          </Link>
        ))}
      </div>
    </section>
  );
};
