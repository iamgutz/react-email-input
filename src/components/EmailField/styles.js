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

  textarea {
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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: SF Pro Text, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: default;
  margin: 0 0.3rem 0.3rem 0;

  &:hover {
    background-color: #EDEDED;
    > button {
      display: flex;
    }
  }

  ${({ error }) => error && `
    background-color: #F3B7BD;
    &:hover {
      background-color: #F3B7BD;
    }
  `}

  > svg {
    width: 1rem;
    height: auto;
    margin-left: 0.25rem;
  }

  > button {
    display: none;
    background: none;
    border: none;
    outline: none;
    padding: 0;
    margin-left: 0.25rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const TextareaWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  width: auto;
`;

export const DropdownWrap = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  background: #FDFDFD;
  width: 18.375rem;
  max-height: 16.356875rem;
  overflow: auto;
  padding: 0.625rem 0;
  margin: 0;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(26, 24, 24, 0.08);
`;

export const DropdownItem = styled.li`
  text-align: left;
  padding: 0.6875rem;
  font-family: SF Pro Text, sans-serif;
  font-size: 0.875rem;
  &:hover {
    background-color: #EFF5F9;
    cursor: pointer;
  }
`;