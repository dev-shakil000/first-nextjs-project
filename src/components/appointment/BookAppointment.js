import React from "react";
import styled from "styled-components";
import { BackPic1 } from "../../../images/index";
import { Row, Col } from "antd";
import { SubmitButton } from "../../components/inputs/buttons";

const BookAppointment = () => {
  return (
    <StyledDiv>
      <Row
        style={{
          paddingInline: "5%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Head1>Book an Appointment Today!</Head1>
          <Para1>
            You want to reach us or you want to take our service book an
            appointment immediately and take your desired service from us so
            that you can feel independent and safe.
          </Para1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SubmitButton
              backgroundColor={"#fdb64d"}
              hoverColor={"#fff"}
              focusColor={"#fff"}
              hoverColorText={"#000"}
              height="50px"
            >
              Get Appointment
            </SubmitButton>
          </div>
        </div>
      </Row>
    </StyledDiv>
  );
};

export default BookAppointment;

const StyledDiv = styled.div`
  background-image: linear-gradient(#62b58ad4, #62b58af0), url(${BackPic1});
  height: 60vh;
  width: 100%;
  background-size: cover;
  background-position: absolute;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Head1 = styled.h1`
  color: #fff;
  font-weight: 800;
  text-align: center;
`;

const Para1 = styled.p`
  color: #fff;
  display: flex;
  text-align: center;
  font-size: 13px;
  line-height: 30px;
`;
