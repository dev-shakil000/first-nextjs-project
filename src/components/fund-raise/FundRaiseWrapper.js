import React from "react";
import Styled from "styled-components";
import { Row, Col } from "antd";
import CardWrapper from "./CardWrapper";

const StyledDiv = Styled.div`
padding: 60px 10%;
.section-header{
    color: #5bb286;
    font-weight: 700;
    text-align: center;
}
.main-heading{
    font-weight: 700;
    font-size: 32px;
    text-align: center;
}
`;

const FundRaiseWrapper = () => {
  const cardData = [
    {
      id: "1",
      title: "Specialist Nursing Care",
      description:
        "Lovecare provides acute assistance, exoneration and psychological help of your loved one.",
      img: "https://smartdemowp.com/lovecare/wp-content/uploads/2020/05/download-1.jpeg",
      percent: "50",
      raisedGoal: "$1,000 raised of $2,000 goal",
    },
    {
      id: "2",
      title: "Provide Home Visit Care",
      description:
        "Lovecare now provides home visit service for the convenience and well-being of your loved one.",
      img: "https://smartdemowp.com/lovecare/wp-content/uploads/2020/04/donation-1-2.jpg",
      percent: "33",
      raisedGoal: "$1,000 raised of $3,000 goal",
    },
    {
      id: "3",
      title: "Relatives Accommodation",
      description:
        "Seniors love to stay with family in that case love care helps them to find that type of accommodations.",
      img: "https://smartdemowp.com/lovecare/wp-content/uploads/2020/04/donation-1-3.jpg",
      percent: "77",
      raisedGoal: "$2,300 raised of $3,000 goal",
    },
  ];

  return (
    <StyledDiv>
      <Row>
        <Col span={24}>
          <h3 className="section-header">01. Fund Raise</h3>
          <h1 className="main-heading">
            We’re Take Care of Your Problems Carefully
          </h1>
        </Col>
      </Row>
      <Row
        justify="center"
        align="top"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ marginTop: "2rem" }}
      >
        {cardData.map((item, index) => {
          return (
            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24} key={index}>
              <CardWrapper data={item} />
            </Col>
          );
        })}
      </Row>
    </StyledDiv>
  );
};
export default FundRaiseWrapper;
