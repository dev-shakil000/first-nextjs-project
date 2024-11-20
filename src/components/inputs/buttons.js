import styled from "styled-components";
import { Button } from "antd";

export const SubmitButton = styled(Button)`
  border-radius: 100px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#5bb286"};
  border: none;
  color: #fff;
  height: ${(props) => (props.height ? props.height : "60px")};
  font-size: 14px;
  user-select: none;
  transition: all 0.5s;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "200px")};
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  float: ${(props) => (props.float ? props.float : "left")};
  position: relative;

  &:hover {
    color: ${(props) =>
      props.hoverColorText ? props.hoverColorText : "#fff"} !important;
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : "#2d2929"};
  }
  &:focus {
    color: ${(props) =>
      props.hoverColorText ? props.hoverColorText : "#fff"} !important;
    background-color: ${(props) =>
      props.focusColor ? props.focusColor : "#2d2929"};
  }
`;
