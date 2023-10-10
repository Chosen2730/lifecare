export const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const baseUrl = "https://lifecare-backend.vercel.app/api/v1";
