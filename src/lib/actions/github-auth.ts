import jwt from "jsonwebtoken";
// import fs from "fs";
import { config } from "../config";

const GITHUB_APP_ID = "YOUR_GITHUB_APP_ID";
import fs from "fs";

const PRIVATE_KEY_PATH = "./private-key.pem"; // Update this path

export const generateGitHubAppJWT = () => {
  const privateKey = fs.readFileSync(PRIVATE_KEY_PATH, "utf8");

  const payload = {
    iat: Math.floor(Date.now() / 1000), // Issued at time
    exp: Math.floor(Date.now() / 1000) + 10 * 60, // Expire in 10 minutes
    iss: GITHUB_APP_ID, // GitHub App ID
  };

  return jwt.sign(payload, privateKey, { algorithm: "RS256" });
};

export const getInstallationAccessToken = async () => {
  const jwtToken = generateGitHubAppJWT();

  const res = await fetch(
    `${config.env.github.apiEndpoint}/app/installations/${config.env.github.orgs}/${config.env.github.installationId}/access_tokens`,
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );

  console.log(
    `${config.env.github.apiEndpoint}/app/installations/${config.env.github.orgs}/${config.env.github.installationId}/access_tokens`,
    res
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.statusText}`);
  }

  const data = await res.json();
  return data.token; // ✅ This is your Installation Access Token
};
