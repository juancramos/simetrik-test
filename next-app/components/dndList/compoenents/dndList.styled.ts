import styled, { css } from 'styled-components';

export const ItemsContainer = styled.div`
  width: 90%;
`;

export const ItemContainer = styled.div<{ even: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-break: break-all;
  ${({ even }) => even && css`background-color: lightcyan;`}
`;
