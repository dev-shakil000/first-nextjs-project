import React, { useState } from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Panel } = Collapse;

const CollapseWrapper1 = () => {
  const [contentKey, setContentKey] = useState(1);

  function callback(key) {
    console.log(key);
    setContentKey(key);
  }

  //   const genExtra = () => (
  //     <>
  //       <PlusOutlined />
  //     </>
  //   );

  return (
    <StyledDiv>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={callback}
        accordion
        expandIconPosition={"left"}
        ghost
      >
        <Panel
          header="Is there support for me at home?"
          key="1"
          //   extra={genExtra()}
        >
          <Para>
            Yes, of course There is support for you at home. We are giving home
            service. We are giving
          </Para>
          <Uip>
            <StyledUl />
            Private Nursing
          </Uip>
          <Uip>
            <StyledUl />
            Residential Nursing
          </Uip>
        </Panel>
        <Panel
          header="I am worried about a loved one"
          key="2"
          //   extra={genExtra()}
        >
          <Para>
            You don’t have no need to worry about your loved one because we are
            giving these service:
          </Para>
          <Uip>
            <StyledUl />
            Giving Security ensurity
          </Uip>
          <Uip>
            <StyledUl />
            Medication Management
          </Uip>
        </Panel>
        <Panel
          header="How can I manage my breathlessness?"
          key="3"
          //   extra={genExtra()}
        >
          <Para>
            No need to worry about the breath you just need some physical
            exercise everyday for taking living breath:
          </Para>
          <Uip>
            <StyledUl />
            Walking everyday morning
          </Uip>
          <Uip>
            <StyledUl />
            Jumping Jacks
          </Uip>
        </Panel>
        <Panel
          header="How can I pay my bill?"
          key="4"
          // extra={genExtra()}
        >
          <Para>
            You can pay our bill easily no need to tensed about the billing
            process:
          </Para>
          <Uip>
            <StyledUl />
            Using Checkbook you can give money
          </Uip>
          <Uip>
            <StyledUl />
            You can give us Cash
          </Uip>
        </Panel>
      </Collapse>
    </StyledDiv>
  );
};

export default CollapseWrapper1;

const StyledDiv = styled.div`
  .ant-collapse-arrow svg {
    color: #fff !important;
  }
  .ant-collapse-arrow {
    border: 1px solid #54b388;
    border-radius: 50px;
    padding: 10px;
    background: #54b388;
  }
  ant-collapse-item-active:focus {
    border-radius: 6px;
    box-shadow: 0 10px 30px 0 rgb(67 131 99 / 25%) !important;
  }
  .ant-collapse {
    font-size: 14px !important;
    font-weight: bolder;
  }
  .ant-collapse-item-active {
    box-shadow: 0 10px 30px 0 rgb(67 131 99 / 25%) !important;
    padding: 20px 0px 0px 0px !important;
    border-radius: 6px;
  }
`;

const Para = styled.p`
  padding-inline: 29px !important;
  font-size: 12px !important;
  font-weight: initial !important;
`;

const StyledUl = styled.div`
  border: 1px solid #54b388;
  background-color: #54b388;
  margin: 5px 10px 0px 30px !important;
  width: 8px;
  height: 8px;
  border-radius: 50px;
  // margin-top: 5px;
`;

const Uip = styled.p`
  display: flex;
  font-size: 12px !important;
  font-weight: initial !important;
`;
