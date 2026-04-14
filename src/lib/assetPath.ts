/**
 * Get the correct path for assets, accounting for GitHub Pages base URL
 * Converts /ashram/photo.jpg to /Yog-Sadhna-Kendra/ashram/photo.jpg on GitHub Pages
 */
export const getAssetPath = (path: string): string => {
  if (!path.startsWith("/")) {
    return path;
  }
  
  const baseUrl = import.meta.env.BASE_URL || "/";
  
  // If base URL is just "/", return path as-is
  if (baseUrl === "/") {
    return path;
  }
  
  // Otherwise prepend the base URL
  return baseUrl.replace(/\/$/, "") + path;
};
