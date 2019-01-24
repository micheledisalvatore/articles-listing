import styled from 'styled-components';

export const Wrapper = styled.div`{
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0%;
  width: 100vw;
  height: 100vh;
  flex: 1 1 0%;
  flex-flow: row wrap;
  place-content: stretch flex-start;
  align-items: stretch;

  & > * {
    margin: 5px;

    &:nth-child(1) {
      width: calc(${100 * 2 / 3}% - 10px);
    }
    &:nth-child(n+2):nth-child(-n+5) {
      width: calc(${100 * 1 / 3}% - 10px);
    }
    &:nth-child(n+6):nth-child(-n+9) {
      width: calc(${100 * 1 / 4}% - 10px);
    }
    &:nth-child(n+10) {
      width: calc(${100 * 1 / 6}% - 10px);
    }
  }
}`;