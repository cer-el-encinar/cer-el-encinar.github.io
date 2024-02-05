import styled from 'styled-components';

export const StyledContained = styled.main`
  max-width: 980px;
  margin: 0 auto;
  @media screen and (max-width: 980px) {
    & {
      padding: 0 2rem;
    }
  }
`;
