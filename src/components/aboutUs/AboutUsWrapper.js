import React from "react";
import { Row, Col, Tabs } from "antd";
import styled from "styled-components";
import { AboutSidePic, AboutDot, Signature } from "../../../images/index";

import Image from "next/image";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const AboutUsWrapper = () => {
  return (
    <StyledDiv>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          paddingInline: "10%",
          paddingBlock: "100px",
          backgroundColor: "#f0f7f7",
          alignItems: "center",
        }}
      >
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <DotImage />
          <AboutSidePic1 />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <h3 className="section-header">02. About Us</h3>
          <h1 className="main-heading">
            We’re Take Care of Your Problems Carefully
          </h1>
          <TabsNav defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Approach" key="1">
              <p>
                Our goal each day is to ensure that our residents’ needs are not
                only met but exceeded. To make that happen, we are committed to
                providing an environment in which residents can enjoy a wide
                range of amenities that allow them to feel independent.
              </p>
              <Image
                src={Signature}
                alt={Signature.png}
                width={100}
                height={50}
              />
            </TabPane>
            <TabPane tab="Mission" key="2">
              <p>
                Our goal each day is to ensure that our residents’ needs are not
                only met but exceeded. To make that happen, we are committed to
                providing an environment in which residents can enjoy a wide
                range of amenities that allow them to feel independent.{" "}
              </p>
              <Image
                src={Signature}
                alt={Signature.png}
                width={100}
                height={50}
              />
            </TabPane>
            <TabPane tab="Target" key="3">
              <p>
                02. About Us We’re Take Care of Your Problems Carefully Approach
                Mission Target Our goal each day is to ensure that our
                residents’ needs are not only met but exceeded. To make that
                happen, we are committed to providing an environment in which
                residents can enjoy a wide range of amenities that allow them to
                feel independent.
              </p>
              <Image
                src={Signature}
                alt={Signature.png}
                width={100}
                height={50}
              />
            </TabPane>
          </TabsNav>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default AboutUsWrapper;

const StyledDiv = styled.div`
  .section-header {
    color: #5bb286;
    font-weight: 700;
  }
  .main-heading {
    font-weight: 700;
    font-size: 32px;
  }
  .ant-tabs-tabpane {
    height: 180px !important;
  }

  @media (max-width: 991px) {
    .section-header {
      margin-top: 15%;
    }
  }
`;

const AboutSidePic1 = styled.div`
  background-image: url(${AboutSidePic});
  height: 450px;
  width: 80%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 5;
  margin-left: 30px;
  margin-top: -40px;
  box-shadow: -0.5px -1px 5px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 991px) {
    height: 360px;
  }
  @media (max-width: 556px) {
    height: 250px;
  }
`;

const DotImage = styled.div`
  background-image: url(${AboutDot});
  height: 450px;
  width: 80%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
  @media (max-width: 991px) {
    height: 360px;
  }
  @media (max-width: 556px) {
    height: 250px;
  }
`;

const TabsNav = styled(Tabs)`
  // .ant-tabs-nav-wrap {
  //   display: flex;
  //   justify-content: center;
  // }
  .ant-tabs-tab {
    color: #000;
    padding: 20px 25px;
    font-size: 15px;
    margin: 0;
  }
  .ant-tabs-ink-bar {
    background: #5bb286 !important;
    height: 3px !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #5bb286 !important;
  }
`;
