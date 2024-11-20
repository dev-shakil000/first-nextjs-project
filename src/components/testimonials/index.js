import React from "react";
import { Row, Col } from "antd";
import Styled from "styled-components";
import { RiDoubleQuotesL } from "react-icons/ri";

const StyledDiv = Styled.div`
padding: 60px 5%;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(240, 247, 247);

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

.main-testimonial-div{
  padding: 10%;
  background-color: #fff;
  box-shadow: -14.142px 44.142px 30px 0 rgb(67 131 99 / 8%);
  width: 1000px;
  margin-top: 100px;
  position: relative;

  p{
    margin-top: 100px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  h3{
    margin-top: 60px;
    text-align: center;
    font-weight: 700;
  }
  h5{
    text-align: center;
    margin-top: 20px;
  }

  &:hover{
    .background-square{
        transform: rotate(150deg);
        transition: 0.3s ease;
    }
}
}

.div-for-square-rotating{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -150px;
}


.background-square{
  height: 100px;
  width: 100px;
  background-color: #5bb286;
  opacity: 0.3;
  transform: rotate(15deg);
  border-radius: 8px;
  position: absolute;
  transition: 0.3s ease;
}

.foreground-square{
  height: 100px;
  width: 100px;
  background-color: #5bb286;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}


@media(max-width: 1000px){
  .main-testimonial-div{
    width: 100%;
  }
  .div-for-square-rotating{
    margin-top: -20%;
  }
}
`;

const Testimonials = () => {
  return (
    <StyledDiv>
      <div>
        <img
          style={{
            opacity: "0.05",
            position: "absolute",
            width: "100%",
            // zIndex: -1,
            left: 0,
            // right: 0,
            // bottom: 0,
            // top: 0,
          }}
          src="https://smartdemowp.com/lovecare/wp-content/themes/lovecare/assets/images/svgs/testi-map-1-1.svg"
          alt="img"
        />
        <h3 className="section-header">04. Testimonial</h3>
        <h1 className="main-heading">
          What Our Client Say
          <br />
          About LoveCare
        </h1>
        <div className="main-testimonial-div">
          <div className="div-for-square-rotating">
            <div className="background-square"></div>
            <div className="foreground-square">
              <RiDoubleQuotesL style={{ fontSize: 60, color: "#fff" }} />
            </div>
          </div>

          <p>
            Compared to the other care centers in the city I have seen that the
            service Lovecare provides is safe and cost bearable and their caring
            service much better than the other care centers in the city.
          </p>

          <h3>Rebeka Dawson</h3>
          <h5>Instructor</h5>
        </div>
      </div>
    </StyledDiv>
  );
};
export default Testimonials;
