import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 980px;
  margin: 2rem auto;
  nav {
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        list-item: none;
        display: inline-block;
        font-size: 2rem;
      }
    }
  }
`;
