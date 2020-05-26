import styled, { css } from 'styled-components';

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  width: 90%;
`;

export const ItemContainer = styled.div<{ even: boolean }>`
  cursor: pointer;
  width: 100%;
  ${({ even }) => even && css`background-color: lightcyan;`}
`;

export const ErrorContainer = styled.div`
  padding: 5px 0;
  color: red;
  fill: red;
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 30px;
`;
