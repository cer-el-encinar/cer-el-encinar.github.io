import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    z-index: 10;
    border-color: rgba(0, 0, 0, 0.6);
  }
`;
