export const getApiUrl = (extension: string) => {
  return import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api/v1/${extension}`
    : `/api/v1/${extension}`;
};
