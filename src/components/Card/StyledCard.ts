import styled from 'styled-components';

export const StyledCard = styled.div`
  background: white;
  border: 1px solid #007ea7;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 126, 167, 0.3);
  transition: transform 0.2s;
  &:hover {
    box-shadow: 0.5rem 0.5rem 2rem rgba(0, 126, 167, 0.3);
    z-index: 10;
    transform: scale(1.1) rotate(5deg);
  }
`;
