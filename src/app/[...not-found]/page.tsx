import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-2 text-foreground bg-background">
      <p className=" font-mono">404 | There is nothing here...</p>
      <Button
        variant="outline"
        className="font-mono group hover:pr-8! focus:pr-8! duration-500 overflow-hidden relative z-10"
        asChild
      >
        <Link href="https://github.com/mokletdev/mokletdev" target="_blank">
          <FaGithub />
          Add something
          <LuArrowUpRight className="absolute right-3 group-hover:translate-y-0 translate-y-1/2 group-focus:opacity-100 group-hover:opacity-100 opacity-0 transition-all duration-500" />
        </Link>
      </Button>
      <div>
        <p className="text-sm">
          or just go{" "}
          <Link href="/" className="underline">
            home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
