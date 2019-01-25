import styled from 'styled-components';

export const Wrapper = styled.div`{
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;

  & > div {
    background: white;
    overflow-y: scroll;
    max-width: calc(100% - 60px);
    max-height: calc(100% - 60px);
    margin: 30px 30px;
  }

  @media only screen and (min-width : 768px) {
    & > div {
      max-width: calc(100% - 300px);
      max-height: calc(100% - 140px);
      margin: 70px 150px;
    }
  }
}`;

export const Background = styled.button`{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  z-index: -1;
}`;
