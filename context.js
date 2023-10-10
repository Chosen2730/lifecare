import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const config = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const baseUrl = "https://affiliate-api.myafrimall.com.ng/api/v1";

  // const getProfile = async () => {
  //   const url = `${baseUrl}/get-profile`;
  //   setIsLoading(true);
  //   try {
  //     const res = await axios.get(url, config());
  //     setProfileDetails(res.data.data);
  //     setProfileImage(res.data.data.profile_photo);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
