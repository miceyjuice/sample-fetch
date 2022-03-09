import styled from "styled-components";

export const Cell = styled.div`
  width: calc(100% / 6);
  padding: 0.5em 0.5em;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  box-shadow: 1px -1px 0 #ddd;
`;

export const Title = styled.span``;

export const Header = styled(Row)`
  background-color: #f5f5f5;
`;