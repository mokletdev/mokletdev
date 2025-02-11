"use client";

import { Button } from "@/components/ui/button";
import { syncGithubRepo } from "@/lib/actions/project";
import { useState } from "react";

export const Sync = () => {
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = async () => {
    setIsSyncing(true); // Disable button
    try {
      await syncGithubRepo();
    } catch (error) {
      console.error("Error syncing:", error);
    } finally {
      setIsSyncing(false); // Re-enable button
    }
  };

  return (
    <Button disabled={isSyncing} onClick={handleSync}>
      {isSyncing ? "Syncing..." : "Sync Projects"}
    </Button>
  );
};
