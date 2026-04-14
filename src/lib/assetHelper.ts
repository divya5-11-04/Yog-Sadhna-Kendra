/**
 * Helper to get the correct asset path for GitHub Pages subdirectory deployment
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  if (path.startsWith('/')) {
    return base + path.slice(1);
  }
  return base + path;
};
