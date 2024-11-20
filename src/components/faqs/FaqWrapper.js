import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import CollapseWrapper from "./collapse/CollapseWrapper1";

const FaqWrapper = () => {
  return (
    <StyledDiv>
      <Row>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <h3 className="section-header">05. FAQ</h3>
          <h1 className="main-heading">Freequently Asked Questions</h1>
          <Para>
            You can ask any type of question about lovecare frequently. You have
            no need to bother what they will think. You can ask lovecare
            support, cost, environment, medical services, residential services,
            assisted living, personal care and any other related question that
            comes to your mind.
          </Para>
          <Para>
            Don’t hesitate to come to us ask anything that you want to know:
          </Para>
        </Col>
        <StyledCol xl={12} lg={12} md={24} sm={24} xs={24}>
          <CollapseWrapper />
        </StyledCol>
      </Row>
    </StyledDiv>
  );
};
export default FaqWrapper;

const StyledDiv = styled.div`
  padding: 5% 10%;
  display: flex;
  align-items: center;

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 12px 16px !important;
    @media (max-width: 447px) {
      font-size: 10px !important;
    }
  }
  .ant-collapse-ghost
    > .ant-collapse-item
    > .ant-collapse-content
    > .ant-collapse-content-box {
    padding-inline: 32px;
  }
  .section-header {
    color: #5bb286;
    font-weight: 700;
  }
  .main-heading {
    font-weight: 700;
    font-size: 32px;
  }
`;

const Para = styled.p`
  width: 88% !important;
`;

const StyledCol = styled(Col)`
  @media (min-width: 992px) {
    padding: 37px 0 0 24px !important;
  }
`;
