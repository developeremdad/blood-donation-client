import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ token }: { token: string }) => {
  return setToLocalStorage("token", token);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("token");
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  } else {
    return "";
  }
};
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("token");
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage("token");
};
