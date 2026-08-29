/**
 * Get dynamic site URL based on environment configuration or window location.
 * Safe for Node.js SSR, Vercel, and Client-side browser execution.
 */
export const getSiteUrl = (path: string = ""): string => {
  let base = "https://telcsuccess.org";

  if (typeof process !== "undefined" && process?.env && process.env["SITE_URL"]) {
    base = process.env["SITE_URL"];
  } else if (typeof window !== "undefined" && window.location?.origin) {
    base = window.location.origin;
  }

  const cleanBase = base.replace(/\/$/, "");
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `${cleanBase}${cleanPath}`;
};
