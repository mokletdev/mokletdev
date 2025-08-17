export const getLanguageColor = (language: string | null) => {
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
