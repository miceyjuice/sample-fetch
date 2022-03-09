import React, { FC } from "react";
import Table from "../../components/Table/Table";
import { Container } from "./MainPage.styles";

export const MainPage: FC = () => {
  return (
    <Container>
      <h1>Sample fetch</h1>
      <Table />
    </Container>
  );
};

export default MainPage;
