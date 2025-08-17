import { GitHubRepository } from "@/types/github";
import { useMemo, useState } from "react";

export const useRepository = ({ repos }: { repos: GitHubRepository[] }) => {
  const [keyword, setKeyword] = useState("");
  const [language, setLanguage] = useState("");

  const languages = useMemo(() => {
    const s = new Set<string>();
    repos.forEach((r) => r.language && s.add(r.language));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [repos]);

  const data = useMemo(() => {
    const ql = keyword.trim().toLowerCase();
    return repos.filter((r) => {
      const inText =
        !ql ||
        r.name.toLowerCase().includes(ql) ||
        (r.description || "").toLowerCase().includes(ql);
      const inLang = !language || r.language === language;
      return inText && inLang;
    });
  }, [repos, keyword, language]);

  return {
    keyword,
    setKeyword,
    language,
    setLanguage,
    languages,
    data,
  };
};
