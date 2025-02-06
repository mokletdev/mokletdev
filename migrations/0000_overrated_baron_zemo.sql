CREATE TABLE "project_collaborators" (
	"project_id" integer NOT NULL,
	"user_login" varchar NOT NULL,
	CONSTRAINT "project_collaborators_project_id_user_login_pk" PRIMARY KEY("project_id","user_login")
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"github_id" integer PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"url" varchar NOT NULL,
	"html_url" varchar NOT NULL,
	"description" text NOT NULL,
	"homepage" varchar,
	"forks_count" integer NOT NULL,
	"stargazers_count" integer NOT NULL,
	"watchers_count" integer NOT NULL,
	"topics" varchar NOT NULL,
	"github_created_at" timestamp,
	"github_updated_at" timestamp,
	"github_pushed_at" timestamp,
	"highlight" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"login" varchar PRIMARY KEY NOT NULL,
	"avatar_url" varchar NOT NULL,
	"url" varchar NOT NULL,
	"html_url" varchar NOT NULL,
	"name" varchar NOT NULL,
	"company" varchar,
	"blog" varchar,
	"location" varchar,
	"email" varchar,
	"hireable" boolean,
	"bio" text,
	"twitter_username" varchar,
	"public_repos" integer NOT NULL,
	"public_gists" integer NOT NULL,
	"followers" integer NOT NULL,
	"following" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "project_collaborators" ADD CONSTRAINT "project_collaborators_project_id_projects_github_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("github_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_collaborators" ADD CONSTRAINT "project_collaborators_user_login_users_login_fk" FOREIGN KEY ("user_login") REFERENCES "public"."users"("login") ON DELETE cascade ON UPDATE no action;