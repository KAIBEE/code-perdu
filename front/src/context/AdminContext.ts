import { createContext } from "react";

type AdminContextType = {
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
  login: string;
  setLogin: (login: string) => void;
};

const AdminContext = createContext<AdminContextType>({
  isAuth: false,
  setIsAuth: () => {},
  login: "",
  setLogin: () => {},
});

export const AdminContextProvider = AdminContext.Provider;

export default AdminContext;
