import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const BookNowButton = ({ children }) => {
  return (
    <StyledDiv>
      <div style={{ color: "#fff" }}>{children}</div>
    </StyledDiv>
  );
};

export default BookNowButton;

const StyledDiv = styled(Button)`
  background-color: #54b388 !important;
  border-radius: 50px !important;
  height: 50px;
  padding-inline: 30px !important;
  &:hover {
    background-color: #000 !important;
  }
`;
