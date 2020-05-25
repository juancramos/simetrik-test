import styled, { css } from 'styled-components';
import { ColumnProps } from './types';

export const Grid = styled.div``;

export const Row = styled.div`
    display: flex;
`;

export const Column = styled.div<ColumnProps>`
    ${({ size }) => size &&
        css`
            flex: ${size};
        `
    }
`;
