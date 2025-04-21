import { authkey } from "@/constants/authkey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { removeFromLocalStorage } from "./../utils/local-storage";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";

export const storeUserInfo = async ({
  accessToken,
}: {
  accessToken: string;
}) => {
  return setToLocalStorage(authkey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authkey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authkey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage(authkey);
};


export const getNewAccessToken = async () => {
  return await axiosInstance({
      url: "http://localhost:5000/api/v1/auth/refresh-token",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true
  })
}