import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import { MainSlider } from "../../../images/index";
import BookNowButton from "../buttons/BookNowButton";
import { SubmitButton } from "../inputs/buttons";

const HomeWrapper = () => {
  return (
    <StyledDiv>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col
          span={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div>
            <h1 style={{ fontWeight: "700" }}>
              We Provide Quality Nursing Care Service.
            </h1>
            <p>
              Lovercare provides quality services by using trained personnel,
              proper instruments, appropriate medications and newer technologies
              for the seniors.
            </p>
            <SubmitButton height="45px" width="160px">
              Book Now
            </SubmitButton>
          </div>
        </Col>
        <StyledCol xl={16} lg={16} md={24} sm={24} xs={24}>
          {/* <HeaderImageDiv> */}

          {/* <div style={{ display: "flex", justifyContent: "end" }}> */}
          <HeaderImageDiv1></HeaderImageDiv1>
          <DetailDiv>
            <Head1>Senior Nursing Care</Head1>
            <Head1>& Elder Care</Head1>
            <Para1>
              Lovecare is focused on helping you care for the wellbeing and
              prosperity of your Loved ones. We comprehend that nothing is
              better than being in the solace of home, encircled by loved ones
            </Para1>
          </DetailDiv>
          {/* </div> */}
          {/* </HeaderImageDiv> */}
        </StyledCol>
      </Row>
    </StyledDiv>
  );
};

export default HomeWrapper;

const StyledDiv = styled.div`
  padding: 120px 5% 0 5%;
  // height: 90vh;
  p {
    font-size: 14px;
    color: #93959e;
    line-height: 30px;
  }
`;

// const HeaderImageDiv = styled.div`
//   background-position: absolute;
//   background-repeat: no-repeat;
//   position: relative;
//   z-index: 3;
// `;

const DetailDiv = styled.div`
  background-color: #fff;
  //   border: 1px solid black;
  padding: 24px;
  width: 330px;
  background-size: cover;
  border-radius: 7px;
  box-shadow: -0.5px -1px 5px 5px rgba(0, 0, 0, 0.1);
  // position: relative;
  top: 60%;
  left: 10%;

  @media (max-width: 991px) {
    margin-top: 40px;
    width: 100%;
  }
`;

const HeaderImageDiv1 = styled.div`
  background-image: url(${MainSlider});
  height: 70vh;
  width: 80%;
  background-size: cover;
  background-position: absolute;
  background-repeat: no-repeat;
  border-radius: 10px;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;

  @media (max-width: 991px) {
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    visibility: hidden;
  }
`;

const Head1 = styled.h1`
  font-size: 18px;
  color: var(--thm-black);
  font-weight: bold;
`;

const Para1 = styled.p`
  font-size: 13px;
  color: #93959e;
`;

// style={{ height: "70vh" }}

const StyledCol = styled(Col)`
  @media (min-width: 992px) {
    height: 70vh;
    display: flex;
    align-items: end;
  }
`;
