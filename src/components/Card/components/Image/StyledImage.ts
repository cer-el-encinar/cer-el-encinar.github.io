import styled, { css } from 'styled-components';

type Props = {
  cover?: boolean;
};

export const StyledImage = styled.div<Props>`
  ${({ cover }) =>
    !cover
      ? css`
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        `
      : ''}
`;
