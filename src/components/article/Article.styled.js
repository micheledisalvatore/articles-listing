import styled from 'styled-components';

export const Img = styled.img`{
  width: 100%;
}`

export const TextWrapper = styled.div`{
  padding: 10px;

  & > h3 {
    margin: 0;
    padding-bottom: 10px;
  }
}`;

export const Content = styled.div`{
  overflow: hidden;
  line-height: 1.2rem;
  max-height: ${1.2 * 3}rem;

  & > p {
    margin-top: 0;
  }
}`