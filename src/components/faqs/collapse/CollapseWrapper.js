import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const CollapseWrapper = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <>
      <Collapse accordion ghost defaultActiveKey={["1"]}>
        <Panel header="Is there support for me at home?" key="1">
          <p>
            Yes, of course There is support for you at home. We are giving home
            service. We are giving
          </p>
        </Panel>
        <Panel header="I am worried about a loved one" key="2">
          <p>
            You don’t have no need to worry about your loved one because we are
            giving these service:
          </p>
        </Panel>
        <Panel header="How can I manage my breathlessness?" key="3">
          <p>
            No need to worry about the breath you just need some physical
            exercise everyday for taking living breath:
          </p>
        </Panel>
        <Panel header="How can I pay my bill?" key="4">
          <p>
            You can pay our bill easily no need to tensed about the billing
            process:
          </p>
        </Panel>
      </Collapse>
    </>
  );
};

export default CollapseWrapper;
