export const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// export const baseUrl = "http://localhost:3000/api/v1";
export const baseUrl = "https://lifecare-backend.vercel.app/api/v1";
