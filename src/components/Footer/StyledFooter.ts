import styled from 'styled-components';

export const StyledFooter = styled.div`
  margin-top: 8rem;
`;

export const StyledFooterBottom = styled.div`
  background: black;
`;

export const StyledFooterContent = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 1rem 0;
  background: black;
  font-size: 1.2rem;
  color: #ccc;
  a {
    color: white;
    &:hover {
      color: white;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    li {
      text-align: center;
      line-height: 3rem;
      margin: 1rem 2rem;
    }
  }
`;

export const StyledFooterImage = styled.div`
  text-align: center;
`;
