/**
 * Get dynamic site URL based on environment configuration.
 */
export const getSiteUrl = (path: string = ""): string => {
  const base = process.env["SITE_URL"] || "https://telcsuccess.org";
  const cleanBase = base.replace(/\/$/, "");
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `${cleanBase}${cleanPath}`;
};
