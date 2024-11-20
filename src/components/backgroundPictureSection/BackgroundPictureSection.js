import React from "react";
import styled from "styled-components";
import { BackPic } from "../../../images/index";

const BackgroundPictureSection = () => {
  return <StyledDiv></StyledDiv>;
};

export default BackgroundPictureSection;

const StyledDiv = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${BackPic});
  height: 70vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 600px) {
    display: none;
  }
`;
