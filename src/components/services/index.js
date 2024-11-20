import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import Styled from "styled-components";
import { SubmitButton } from "../inputs/buttons";

const StyledDiv = Styled.div`
padding: 60px 10% 0px 10%;
    .section-header{
        color: #5bb286;
        font-weight: 700;
    }
    .main-heading{
        font-weight: 700;
        font-size: 32px;
    }
    p{
      color: #93959e;
      font-size: 14px;
    }

    .text-portion-div{
      margin-left: 150px;
      margin-top: 80px;

      .front-pic{
        width: 350px;
        position: relative;
        border-radius: 6px;
        left: 60px;
        bottom: 60px;
      }
  
      .back-dotted-pic{
        width: 320px;
        position: absolute;
        transform: rotate(180deg);
      }
  
      .text-div{
        width: 350px;
        height: 230px;
        position: relative;
        border-radius: 6px;
        background-color: #fff;
        padding: 32px;
        bottom: 225px;
        right: 150px;
        box-shadow: rgb(0 0 0 / 25%) 0px 0px 0px, rgb(0 0 0 / 5%) -10px 10px 10px;
      }

    }



    .green-button{
        margin-top: 10px;
        margin-bottom: 10px;
        height: 70px;
        width: 250px;
        color: #000;
        border-radius: 6px;
        transition: 0.3s ease;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 18px;
        cursor: pointer;
        user-select: none;
        border: 0px;

        &:hover{
            padding-left: 24px !important;
            transition: 0.3s ease !important;
            background-color: #5bb286 !important;
            color: #fff !important;
        }
        &:active{
            background-color: #5bb286 !important;
            color: #fff !important;
        }
        &:focus{
            background-color: #5bb286 !important;
            color: #fff !important;
        }
    }

    @media(max-width: 1200px){
      .text-portion-div{
        .front-pic{
          width: 350px;
          left: -30%;
        }
        .back-dotted-pic{
          left: 0px;
        }
  
        .text-div{
          right: 230px;
        }

      }
    }

    @media(max-width: 991px){
      .text-portion-div{
        .front-pic{
          width: 350px;
          left: 30%;
        }
        .back-dotted-pic{
          left: 30%;
        }
  
        .text-div{
          right: 0px;
        }

      }
    }


    @media(max-width: 676px){
      .text-portion-div{
        margin-left: 0px;
        margin-top: 10px;
        margin-bottom: 30px;
  
        .front-pic{
          display: none;
          width: 350px;
          left: -20%;
        }
        .back-dotted-pic{
          display: none;
          left: 0px;
        }
    
        .text-div{
          width: 100%;
          // height: 230px;
          position: relative;
          border-radius: 6px;
          background-color: #fff;
          padding: 32px;
          bottom: 0px;
          right: 0px;
          top: 0px;
          box-shadow: rgb(0 0 0 / 25%) 0px 0px 0px, rgb(0 0 0 / 5%) -10px 10px 10px;
        }
        
      }

    }

    // @media(max-width: 430px){
    //   .front-pic{
    //     width: 320px;
    //     left: -40%;
    //   }

    //   .text-div{
    //     width: 400px;
    //     position: relative;
    //     bottom: 100px;
    //   }
    // }
`;

const servicesData = [
  {
    name: "Physical Therapy",
    para: "Physical therapy helps sore or sick people enhance their stroll and handle pain and significant segments of prophylactic care.",
    img: "https://smartdemowp.com/lovecare/wp-content/uploads/2020/04/living-option-2-2.jpg",
  },

  {
    name: "Health Care",
    para: "Health care protection of health through diagnosis, injury, reclamation, treatment, physical and mental  deprivation.",
    img: "https://smartdemowp.com/lovecare/wp-content/uploads/2020/04/living-option-2-1.jpg",
  },

  {
    name: "Private Nursing",
    para: "Private nursing gives their service to your home/wherever you want. They are very professional to give their service.",
    img: "https://smartdemowp.com/lovecare/wp-content/uploads/2020/04/living-option-2-3.jpg",
  },

  {
    name: "Residential Nursing",
    para: "Residential nursing this service gives for a long time for seniors who are not able  to maintain on his/her own work on a daily basis.",
    img: "https://smartdemowp.com/lovecare/wp-content/uploads/2020/04/living-option-2-4.jpg",
  },

  {
    name: "Dementia Care",
    para: "Dementia is a multiple disease in some cases it may cause memory loss. Lovecare now services dementia care.",
    img: "https://smartdemowp.com/lovecare/wp-content/uploads/2020/04/living-option-2-5.jpg",
  },
];

const Services = () => {
  const [state, setState] = useState(0);
  return (
    <StyledDiv>
      <Row>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <h3 className="section-header">03. Services</h3>
          <h1 className="main-heading">Everyone Deserves Our Best Services</h1>
          <p>
            People come to us for trust and honesty. They deserve our best
            service since they cost money for their loved one to be happy and so
            we give them our best services.
          </p>
          {servicesData.map((data, index) => {
            return (
              <Button
                onClick={() => {
                  setState(index);
                }}
                className="green-button"
                style={{
                  backgroundColor: state === index ? "#5bb286" : "#fff",
                  color: state === index ? "#fff" : "#000",
                  paddingLeft: state === index ? "24px" : "8px",
                }}
              >
                {data.name}
              </Button>
            );
          })}
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="text-portion-div">
            <div>
              <img
                className="back-dotted-pic"
                src="https://smartdemowp.com/lovecare/wp-content/themes/lovecare/assets/images/shapes/living-option-dot-2-2.png"
                alt="img"
              />

              <img
                className="front-pic"
                src={servicesData[state].img}
                alt="img"
              />

              <div className="text-div">
                <h1>{servicesData[state].name}</h1>
                <p>{servicesData[state].para}</p>
                <SubmitButton height="40px" width="130px">
                  Read More
                </SubmitButton>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </StyledDiv>
  );
};
export default Services;
