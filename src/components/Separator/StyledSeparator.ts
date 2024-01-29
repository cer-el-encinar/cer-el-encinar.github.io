import styled from 'styled-components';

type Props = {
  $imgPath: string;
};

export const StyledSeparator = styled.div<Props>`
  margin: 8rem 0;
  padding: 1rem;
  background-image: url(${({ $imgPath }) => $imgPath});
  background-repeat: repeat-x;
  opacity: 0.1;
`;
