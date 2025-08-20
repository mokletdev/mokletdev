import { LuLoader } from "react-icons/lu";


// ! Dark mode not applied when loading
const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center font-mono text-foreground bg-background">
      <LuLoader className="animate-spin mr-1.5 size-4" />
      Please wait...
    </div>
  );
};

export default Loading;
