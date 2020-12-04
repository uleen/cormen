import styled from 'styled-components';

export const RemainingCollectiions = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    flex-grow: 1;
    min-width: 100%;

    @media (min-width: 768px) {
      min-width: 50%;
    }

    @media (min-width: 1024px) {
      min-width: 33%;
    }
  }
`;
