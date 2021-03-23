import styled from 'styled-components';

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 8px;
  box-sizing: border-box;

  > textarea {
    flex: 1;
    ${({ textareaMinWidth }) => (`
      min-width: ${textareaMinWidth}px;
      width: ${textareaMinWidth}px;
    `)}
    box-sizing: border-box;
    border: none;
    outline: none;
    resize: none;
    font-family: SF Pro Text, sans-serif;
    font-size: 0.875rem;
  }
`;

export const Chip = styled.div`
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: SF Pro Text, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: default;
  margin: 0 0.3rem 0.3rem 0;
  &:hover {
    background-color: #EDEDED;
  }
  ${({ error }) => error && `
    background-color: #F3B7BD;
    &:hover {
      background-color: #F3B7BD;
    }
  `}
`;