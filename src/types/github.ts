// GitHub Repository types (TypeScript)
// Notes:
// - Most fields are documented as optional because availability varies by endpoint,
//   repo settings, auth scope, or GitHub plan.
// - Some string fields have known enumerations; they’re typed as string with
//   a comment listing typical values to avoid breakage on future changes.

export type Visibility = "public" | "private" | "internal";

/** Minimal user/org object commonly embedded in repo payloads */
export interface GitHubUserLite {
  /** Login handle (e.g., "vercel") */
  login: string;
  /** Numeric user/org ID */
  id: number;
  /** GraphQL node ID */
  node_id: string;
  /** Avatar image URL */
  avatar_url: string;
  /** Deprecated; usually empty string */
  gravatar_id: string | null;
  /** API URL for this user */
  url: string;
  /** HTML profile/org page */
  html_url: string;
  /** Followers collection URL */
  followers_url: string;
  /** Following collection templated URL */
  following_url: string;
  /** Gists collection templated URL */
  gists_url: string;
  /** Starred repos templated URL */
  starred_url: string;
  /** Subscriptions collection URL */
  subscriptions_url: string;
  /** Organizations collection URL */
  organizations_url: string;
  /** Repos collection URL */
  repos_url: string;
  /** Events collection URL */
  events_url: string;
  /** Received events URL */
  received_events_url: string;
  /** "User" | "Organization" | "Bot" */
  type: string;
  /** Whether this user is a site admin */
  site_admin: boolean;
}

/** SPDX-style license descriptor (may be null for unlicensed repos) */
export interface LicenseSimple {
  /** License key (e.g., "mit") */
  key: string;
  /** Human-readable license name */
  name: string;
  /** SPDX identifier (e.g., "MIT") or "NOASSERTION" */
  spdx_id: string | null;
  /** API URL for license metadata */
  url: string | null;
  /** GraphQL node ID */
  node_id: string;
}

/** The caller’s effective permissions on this repo */
export interface RepoPermissions {
  /** Can administer settings (usually owners/admins) */
  admin: boolean;
  /** Can push (write) */
  push: boolean;
  /** Can pull (read) */
  pull: boolean;
  /** Can triage (if enabled in org) */
  triage?: boolean;
  /** Can maintain (if enabled in org) */
  maintain?: boolean;
}

/** Security & analysis features state (if visible to caller) */
export interface SecurityAndAnalysis {
  /** GitHub Advanced Security status: "enabled" | "disabled" */
  advanced_security?: { status: string };
  /** Secret scanning status: "enabled" | "disabled" */
  secret_scanning?: { status: string };
  /** Secret scanning push protection status: "enabled" | "disabled" */
  secret_scanning_push_protection?: { status: string };
  /** Dependency graph / dependabot etc. may appear here in some tenants */
  [extra: string]: unknown;
}

/** Full repository shape (close to GET /repos/{owner}/{repo}) */
export interface GitHubRepository {
  /** Numeric repository ID */
  id: number;
  /** GraphQL node ID */
  node_id: string;
  /** Short repo name (e.g., "next.js") */
  name: string;
  /** "owner/name" */
  full_name: string;
  /** True if repo is private */
  private: boolean;
  /** Owning user or organization */
  owner: GitHubUserLite;

  /** Public web URL for the repo */
  html_url: string;
  /** Repo description (nullable) */
  description: string | null;
  /** True if this repo is a fork of another */
  fork: boolean;
  /** API URL for this repo */
  url: string;

  // ---- Templated/collection API URLs (informational) ----
  /** Forks collection URL */
  forks_url: string;
  /** Keys collection URL */
  keys_url: string;
  /** Collaborators (templated) URL */
  collaborators_url: string;
  /** Teams collection URL */
  teams_url: string;
  /** Hooks collection URL */
  hooks_url: string;
  /** Issue events (templated) URL */
  issue_events_url: string;
  /** Events collection URL */
  events_url: string;
  /** Assignees (templated) URL */
  assignees_url: string;
  /** Branches (templated) URL */
  branches_url: string;
  /** Tags collection URL */
  tags_url: string;
  /** Blobs (templated) URL */
  blobs_url: string;
  /** Git tags (templated) URL */
  git_tags_url: string;
  /** Git refs (templated) URL */
  git_refs_url: string;
  /** Trees (templated) URL */
  trees_url: string;
  /** Statuses (templated) URL */
  statuses_url: string;
  /** Languages URL */
  languages_url: string;
  /** Stargazers URL */
  stargazers_url: string;
  /** Contributors URL */
  contributors_url: string;
  /** Subscribers URL */
  subscribers_url: string;
  /** Subscription URL */
  subscription_url: string;
  /** Commits (templated) URL */
  commits_url: string;
  /** Git commits (templated) URL */
  git_commits_url: string;
  /** Comments (templated) URL */
  comments_url: string;
  /** Issue comment (templated) URL */
  issue_comment_url: string;
  /** Contents (templated) URL */
  contents_url: string;
  /** Compare (templated) URL */
  compare_url: string;
  /** Merges URL */
  merges_url: string;
  /** Archive (templated) URL */
  archive_url: string;
  /** Downloads URL */
  downloads_url: string;
  /** Issues (templated) URL */
  issues_url: string;
  /** Pulls (templated) URL */
  pulls_url: string;
  /** Milestones (templated) URL */
  milestones_url: string;
  /** Notifications (templated) URL */
  notifications_url: string;
  /** Labels (templated) URL */
  labels_url: string;
  /** Releases (templated) URL */
  releases_url: string;
  /** Deployments URL */
  deployments_url: string;

  // ---- Timestamps ----
  /** ISO created timestamp */
  created_at: string;
  /** ISO last metadata update timestamp */
  updated_at: string;
  /** ISO last push-to-default-branch timestamp */
  pushed_at: string | null;

  // ---- Git/clone info ----
  /** Read-only Git protocol URL */
  git_url: string | null;
  /** SSH clone URL */
  ssh_url: string | null;
  /** HTTPS clone URL */
  clone_url: string | null;
  /** Subversion clone URL (legacy) */
  svn_url: string | null;

  // ---- Project metadata ----
  /** Optional project website */
  homepage: string | null;
  /** Repo size in KiB */
  size: number;
  /** Stargazer count */
  stargazers_count: number;
  /** Watcher count (mirrors stargazers_count in the v3 API) */
  watchers_count: number;
  /** Dominant language (nullable) */
  language: string | null;

  // ---- Feature flags ----
  /** Issues enabled */
  has_issues: boolean;
  /** Projects enabled */
  has_projects: boolean;
  /** Downloads enabled (legacy) */
  has_downloads: boolean;
  /** Wiki enabled */
  has_wiki: boolean;
  /** GitHub Pages enabled */
  has_pages: boolean;
  /** Discussions enabled */
  has_discussions?: boolean;

  // ---- Counts ----
  /** Fork count */
  forks_count: number;
  /** Mirror URL if this is a mirror */
  mirror_url: string | null;
  /** True if archived (read-only) */
  archived: boolean;
  /** True if disabled */
  disabled: boolean;
  /** Open issues count */
  open_issues_count: number;

  // ---- Policy & governance ----
  /** License info (nullable) */
  license: LicenseSimple | null;
  /** Whether forking is allowed */
  allow_forking?: boolean;
  /** True if repo was created from a template */
  is_template?: boolean;
  /** Require web commit signoff */
  web_commit_signoff_required?: boolean;

  // ---- Social/engagement ----
  /** Topics (labels) for this repo */
  topics?: string[];
  /** Visibility (public/private/internal) */
  visibility?: Visibility;

  // ---- Convenience mirrors of counts (present on some endpoints) ----
  /** Fork count (alias of forks_count) */
  forks?: number;
  /** Open issues (alias of open_issues_count) */
  open_issues?: number;
  /** Watchers (alias of watchers_count) */
  watchers?: number;

  // ---- Branch/defaults ----
  /** Default branch name (e.g., "main") */
  default_branch: string;

  // ---- Fine-grained merge settings (present on full repo payloads) ----
  /** Allow squash merge */
  allow_squash_merge?: boolean;
  /** Allow merge commit */
  allow_merge_commit?: boolean;
  /** Allow rebase merge */
  allow_rebase_merge?: boolean;
  /** Allow auto-merge when checks pass */
  allow_auto_merge?: boolean;
  /** Allow updating branches from UI */
  allow_update_branch?: boolean;
  /** Delete head branch on merge */
  delete_branch_on_merge?: boolean;
  /** Use PR title as default for squash commits */
  use_squash_pr_title_as_default?: boolean;
  /** Squash merge commit message policy (e.g., "PR_BODY" | "COMMIT_MESSAGES" | "BLANK") */
  squash_merge_commit_message?: string;
  /** Squash merge commit title policy (e.g., "PR_TITLE") */
  squash_merge_commit_title?: string;
  /** Merge commit message policy (e.g., "PR_BODY" | "BLANK") */
  merge_commit_message?: string;
  /** Merge commit title policy (e.g., "PR_TITLE") */
  merge_commit_title?: string;

  // ---- Ownership & permissions (relative to caller) ----
  /** Caller’s permissions on this repo */
  permissions?: RepoPermissions;

  // ---- Security & compliance ----
  /** Security/analysis feature flags (if visible) */
  security_and_analysis?: SecurityAndAnalysis;

  // ---- Org/owner context (may appear on some responses) ----
  /** Organization object if owner is an org (varies by endpoint) */
  organization?: GitHubUserLite;

  // ---- Additional community metrics (full payload) ----
  /** Subscriber (watchers in the old sense) count */
  subscribers_count?: number;
  /** Network size (forks incl. descendants) */
  network_count?: number;

  // ---- Misc: GitHub may add preview/tenant-specific fields ----
  /** Escape hatch for unknown future fields */
  [extra: string]: unknown;
}
