import {
  varchar,
  integer,
  text,
  pgTable,
  timestamp,
  boolean,
  primaryKey,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  githubId: integer("github_id").notNull().primaryKey(),
  name: varchar("name").notNull(),
  url: varchar("url").notNull(),
  htmlUrl: varchar("html_url").notNull(),
  description: text("description").notNull(),
  homepage: varchar("homepage"),
  forksCount: integer("forks_count").notNull(),
  stargazersCount: integer("stargazers_count").notNull(),
  watchersCount: integer("watchers_count").notNull(),
  topics: varchar("topics").notNull(),
  githubCreatedAt: timestamp("github_created_at"),
  githubUpdatedAt: timestamp("github_updated_at"),
  githubPushedAt: timestamp("github_pushed_at"),
  // Custom fields
  highlight: boolean("highlight").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const users = pgTable("users", {
  login: varchar("login").notNull().primaryKey(),
  avatarUrl: varchar("avatar_url").notNull(),
  url: varchar("url").notNull(),
  html_url: varchar("html_url").notNull(),
  name: varchar("name").notNull(),
  company: varchar("company"),
  blog: varchar("blog"),
  location: varchar("location"),
  email: varchar("email"),
  hireable: boolean("hireable"),
  bio: text("bio"),
  twitterUsername: varchar("twitter_username"),
  publicRepos: integer("public_repos").notNull(),
  publicGists: integer("public_gists").notNull(),
  followers: integer("followers").notNull(),
  following: integer("following").notNull(),
  // Custom fields
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const projectCollaborators = pgTable(
  "project_collaborators",
  {
    projectId: integer("project_id")
      .notNull()
      .references(() => projects.githubId, { onDelete: "cascade" }),
    userLogin: varchar("user_login")
      .notNull()
      .references(() => users.login, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.projectId, table.userLogin] }), // Composite primary key
  })
);
