import { authKey } from "@/constants/storageKey";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import jwtDecode from "jwt-decode";

type ITokenProps = {
  accessToken: string;
};

export const storeUserInfo = async ({ accessToken }: ITokenProps) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = async () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = jwtDecode(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};
