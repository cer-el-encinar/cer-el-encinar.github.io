import styled from 'styled-components';

export const StyledCookies = styled.div`
  position: fixed;
  border: 4px #007ea7 solid;
  border-radius: 1rem;

  bottom: 0;
  left: 50%;
  width: 800px;
  margin-left: -400px;

  margin-bottom: 2rem;
  z-index: 10;
  color: #007ea7;
  background-color: white;
  overflow: hidden;

  @media screen and (max-width: 850px) {
    & {
      width: auto;
      left: 0;
      right: 0;
      margin: 2rem;
    }
  }
`;

export const StyledInnerCookies = styled.div`
  padding: 2rem 2rem;
`;
