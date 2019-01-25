import styled from 'styled-components';

export const Img = styled.img`{
  max-width: 100%;
}`;

export const TextWrapper = styled.div`{
  padding: 10px;

  & > h3 {
    margin: 0;
    padding-bottom: 10px;
  }
}`;

export const Content = styled.button`{
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;

  ${({ full }) => !full && `
    overflow: hidden;
    line-height: 1.2rem;
    max-height: ${1.2 * 3}rem;
  `}

  & > p {
    margin-top: 0;
  }
}`;
