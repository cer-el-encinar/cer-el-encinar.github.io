import styled from 'styled-components';

type Props = {
  $inFooter: boolean;
};

export const StyledSocial = styled.div<Props>`
  ul {
    display: flex;
    justify-content: center;
    li {
      text-align: center;
      line-height: 3rem;
      margin: 1rem 2rem;
    }
  }
  ${({ $inFooter }) => ($inFooter ? '' : 'margin-bottom: 8rem;')}
`;
