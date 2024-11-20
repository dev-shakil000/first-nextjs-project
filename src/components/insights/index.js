import React from "react";
import { Row, Col } from "antd";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    padding: 85px 5%;
    background-color: #5bb286;
    min-height: 250px;
    position: relative;
    ::before{
        background-image:url(https://smartdemowp.com/lovecare/wp-content/themes/lovecare/assets/images/svgs/page-header-curv-dark-1-1.svg);
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: center;
        background-repeat: no-repeat;
        height: 100%;
        top: 46%;
    }

    h1{
        font-weight: 700;
    }

    .main-div{
        text-align: center;
        &:hover{
            .background-square{
                transform: rotate(150deg);
                transition: 0.3s ease;
            }
        }
    }

    .background-square{
        height: 120px;
        width: 120px;
        background-color: #fff;
        opacity: 0.3;
        transform: rotate(15deg);
        border-radius: 8px;
        position: absolute;
        transition: 0.3s ease;
    }

    .foreground-square{
        height: 120px;
        width: 120px;
        background-color: #fff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

    }

    @media(max-width: 991px){
      ::before{
        top: 47%;
      }
    }

    @media(max-width: 576px){
      ::before{
        top: 49%;
      }
    }
`;

const Insights = () => {
  return (
    <StyledDiv>
      <Row>
        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={24}>
          <div className="main-div">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="background-square"></div>
              <div className="foreground-square">
                <h1 style={{ margin: 0, color: "#ff5e5e" }}>25+</h1>
              </div>
            </div>
            <h1 style={{ margin: 0, color: "#fff", marginTop: 24 }}>
              Years Experiences
            </h1>
          </div>
        </Col>

        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={24}>
          <div className="main-div">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="background-square"></div>
              <div className="foreground-square">
                <h1 style={{ margin: 0, color: "#5bb286" }}>750</h1>
              </div>
            </div>
            <h1 style={{ margin: 0, color: "#fff", marginTop: 24 }}>
              Great Volunteers
            </h1>
          </div>
        </Col>

        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={24}>
          <div className="main-div">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="background-square"></div>
              <div className="foreground-square">
                <h1 style={{ margin: 0, color: "#f9b73f" }}>20k+</h1>
              </div>
            </div>
            <h1 style={{ margin: 0, color: "#fff", marginTop: 24 }}>
              Satisfied Clients
            </h1>
          </div>
        </Col>

        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={24}>
          <div className="main-div">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="background-square"></div>
              <div className="foreground-square">
                <h1 style={{ margin: 0, color: "#6b64fa" }}>30+</h1>
              </div>
            </div>
            <h1 style={{ margin: 0, color: "#fff", marginTop: 24 }}>
              Awards Achieve
            </h1>
          </div>
        </Col>
      </Row>
    </StyledDiv>
  );
};
export default Insights;
