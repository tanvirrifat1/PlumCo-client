export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://plumbing-server-tanvirrifat1.vercel.app/api/v1"
  );
};
