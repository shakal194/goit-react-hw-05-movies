import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  @media screen and (min-width: 320px) {
    max-width: 320px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 75px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 71px;
  }
`;
