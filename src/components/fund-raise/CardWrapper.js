import { Card, Progress } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { SubmitButton } from "../inputs/buttons";
// import { Fade } from "react-awesome-reveal";
const { Meta } = Card;

const CardStyled = styled(Card)`
  &.ant-card-bordered {
    min-height: 80vh;
    border: none !important;

    @media (max-width: 991px) {
      margin-top: 4%;
      margin-bottom: 4%;
    }
  }
  &.ant-card {
    border-radius: 10px !important;
    box-shadow: 0px 20px 30px 0px rgb(67 131 99 / 10%) !important;
  }
  .ant-card-cover img {
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    transition: 0.3s ease;
  }
  .ant-card-body {
    padding: 30px;
  }
  .ant-card-meta-title {
    font-size: 25px;
    white-space: unset;
    text-overflow: unset;
  }
  .ant-card-meta-description {
    font-size: 16px;
    margin-top: 1.5rem;
  }

  .ant-progress-text {
    color: #5bb286;
    font-size: 12px;
  }
  .bookNow-btn .ant-btn {
    position: absolute !important;
    display: none;
  }
  &.ant-card:hover {
    cursor: pointer !important;
    .bookNow-btn .ant-btn {
      display: inline-block;
    }

    .ant-card-cover img {
      opacity: 0.8;
      transition: 0.3s ease;
    }
  }
`;

const CardWrapper = (props) => {
  const { id, img, title, description, percent, raisedGoal } = props.data;

  return (
    <CardStyled
      cover={<img alt="example" src={img} />}
      actions={
        [
          // <SettingOutlined key="setting" />,
          // <EditOutlined key="edit" />,
          // <EllipsisOutlined key="ellipsis" />,
        ]
      }
    >
      <Meta
        title={title}
        description={
          <div>
            <p style={{ width: 250 }}>{description}</p>
            <Progress
              percent={percent}
              size="small"
              status="active"
              strokeColor="#5bb286"
              style={{
                marginTop: "2rem",
                // marginTop: id == "1" ? "1.5rem" : null,
              }}
            />
            <p style={{ color: "black", fontSize: 14 }}>{raisedGoal}</p>
            <div className="bookNow-btn">
              {/* <Fade> */}
              <SubmitButton width="150px" height="40px">
                Book Now
              </SubmitButton>
              {/* </Fade> */}
            </div>
          </div>
        }
      />
    </CardStyled>
  );
};

export default CardWrapper;
