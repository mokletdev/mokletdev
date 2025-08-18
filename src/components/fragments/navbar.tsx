import { ModeToggle } from "@/components/fragments/mode-toggle";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-lg h-14 sm:h-16 z-50">
      <div className="mx-auto sm:w-[calc(100%-4rem)] max-w-7xl h-full flex items-center pr-4 sm:pr-0 gap-2">
        <div className="bg-primary text-primary-foreground font-rubik font-medium h-full px-4 sm:px-6 flex items-center text-xl">
          dev.
        </div>
        <div className="flex-1" />
        <ModeToggle />
        <Button asChild>
          <Link href="https://github.com/mokletdev" target="_blank">
            <FaGithub className="size-[1.2rem]" />
            Github
          </Link>
        </Button>
      </div>
    </nav>
  );
};
