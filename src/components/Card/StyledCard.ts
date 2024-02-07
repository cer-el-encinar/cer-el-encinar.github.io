import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  border: 1px solid #007ea7;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    z-index: 10;
    border-color: #00a8e8;
  }
`;
