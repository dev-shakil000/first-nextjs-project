import styled from "styled-components";
import { Input, Button } from "antd";

export const InputWrapper = styled(Input)`
  outline: none;
  border: ${(props) => (props.border ? props.border : "1px solid #d1d1d1")};
  border-radius: 100px;
  display: block;
  width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
  width: ${(props) => (props.width ? props.width : "-moz-available")};
  height: 60px;
  font-weight: 500;
  padding: 4px 22px;
  transition: 0.3s ease;
  ::placeholder {
    color: #d0d0d0;
    font-weight: 500;
    user-select: none;
  }
  input {
    height: 40px;
    border-radius: 4px;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    ::placeholder {
      color: #d0d0d0;
      font-weight: 500;
      user-select: none;
    }
    &:focus {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  &:hover {
    transition: 0.3s ease;
    border: 1px solid #d1d1d1;
    box-shadow: none !important;
  }
  &:active {
    transition: 0.3s ease;
    border: 1px solid #d1d1d1;
    box-shadow: none !important;
  }
  &:focus {
    transition: 0.3s ease;
    border: 1px solid #d1d1d1;
    box-shadow: none !important;
  }
`;

export const TextAreaWrapper = styled.textarea`
  outline: none;
  box-shadow: none;
  resize: none;
  padding: 18px 22px;
  height: 200px;
  border-radius: 25px;
  border: 1px solid #d1d1d1;
  font-size: 15px;
  font-weight: 500;
  width: -webkit-fill-available;
  width: -moz-available;
  ::placeholder {
    color: #d0d0d0;
    font-weight: 500;
    user-select: none;
  }
  &:hover {
    // transition: 0.3s ease;
    border: 1px solid #d1d1d1;
  }
  &:active {
    // transition: 0.3s ease;
    border: 1px solid #d1d1d1;
  }
  &:focus {
    // transition: 0.3s ease;
    border: 1px solid #d1d1d1;
  }
`;
