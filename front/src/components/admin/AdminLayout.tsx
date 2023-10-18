import { PropsWithChildren, useContext } from "react";
import AdminContext from "@/context/AdminContext.ts";
import { Title } from "@components/styled/Title.ts";
import styled from "styled-components";

const AdminContainer = styled.div`
  display: flex;
  height: 100dvh;
  flex-direction: column;
  gap: 1rem;
  margin: 0 10px;
`;

const AdminLayout = ({ children }: PropsWithChildren) => {
  const { login, setIsAuth } = useContext(AdminContext);
  const logout = () => {
    setIsAuth(false);
  };
  return (
    <AdminContainer>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title>{login}</Title>
        <button onClick={logout}>Se deconnecter</button>
      </header>
      <div
        style={{
          flex: 1,
        }}
      >
        {children}
      </div>
    </AdminContainer>
  );
};
export default AdminLayout;
