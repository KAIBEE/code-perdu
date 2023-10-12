import { useState } from "react";
import { AdminContextProvider } from "@/context/AdminContext.ts";
import AdminDashboardPage from "@components/admin/AdminDashboardPage.tsx";
import Login from "@components/admin/Login.tsx";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [login, setLogin] = useState("");

  return (
    <AdminContextProvider
      value={{
        isAuth: isAuthenticated,
        setIsAuth: setIsAuthenticated,
        login,
        setLogin,
      }}
    >
      {!isAuthenticated && <Login />}
      {isAuthenticated && <AdminDashboardPage />}
    </AdminContextProvider>
  );
};

export default AdminPage;
