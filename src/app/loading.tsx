import { LuLoader } from "react-icons/lu";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center font-mono">
      <LuLoader className="animate-spin mr-1.5 size-4" />
      Please wait...
    </div>
  );
};

export default Loading;
