import React, { FC } from "react";
import { Cell, Header, Row, Title } from "../Table.styles";

export const Theader: FC = () => {
  return (
    <Header>
      <Cell>
        <Title>WO ID</Title>
      </Cell>
      <Cell>
        <Title>Description</Title>
      </Cell>
      <Cell>
        <Title>Received date</Title>
      </Cell>
      <Cell>
        <Title>Assigned to</Title>
      </Cell>
      <Cell>
        <Title>Status</Title>
      </Cell>
      <Cell>
        <Title>Priority</Title>
      </Cell>
    </Header>
  );
};
export default Theader;
