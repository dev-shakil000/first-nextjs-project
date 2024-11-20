import React from "react";
import Link from "next/link";
import Styled from "styled-components";
import { Row, Col } from "antd";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaVimeoV,
} from "react-icons/fa";
import { BiWifi2 } from "react-icons/bi";

const StyledFooter1 = Styled.div`
  background-color: #24262B;
  padding-top: 50px;
  padding-bottom: 50px;
  .main-div{
    padding: 0px 10%;
    display: flex;
    align-items center;
    justify-content: space-between;

    .love-care-logo{
      display: flex;
      width: 100px;
    }

    .social-icons{
      display: flex;
    align-items center;
    justify-content: center;
    }


    .social-links{
      font-size: 24px;
      margin-left: 10px;
      margin-right: 10px;
      color: gray;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover{
        transition: 0.3s ease;
        color: #fff;
      }
    }
  }

  @media(max-width: 991px){
    .main-div{
      display: grid;
      justify-content: center;
      .love-care-logo{
        display: none;
      }

      .social-icons{
        margin-top: 30px;
      }
    }
  }
`;

const StyledFooter2 = Styled.div`
  background-color: #1B1D21;
  padding-top: 5%;
  padding-bottom: 5%;
  border-bottom: 1px solid gray;
  .main-div{
    padding: 0px 10%;
    display: flex;
    justify-content: space-between;

    .services{
      padding-left: 8%;
    }

    h2{
      color: #fff;
    }
    h4{
      color: gray;
    }
    p{
      color: gray;
    }
    a{
      color: gray;
      &:hover{
        color: #fff;
      }
    }
    ul {
      padding: 0px;
      li {
        list-style-type: none;
        margin-bottom: 10px;
        &:hover {
          color: #fff;
        }
        a {
          cursor: pointer;
          color: #gray;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }


  @media(max-width: 575px){
    .main-div{
      .services{
        padding-left: 0px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
`;

const StyledFooter3 = Styled.div`
  background-color: #1B1D21;
  padding-top: 32px;
  padding-bottom: 32px;
  .main-div{
    color: gray;
    padding: 0px 10%;
    display: flex;
    justify-content: space-between;
    p{
      color: gray;
    }
    a{
      color: gray;
      &:hover{
        color: #fff;
      }
    }
  }

  @media(max-width: 575px){
    .main-div{
      display: grid;
    justify-content: center;
    }
  }
`;

export const FooterContent1 = () => {
  return (
    <StyledFooter1>
      <div className="main-div">
        <img
          style={{ width: 200 }}
          src="https://smartdemowp.com/lovecare/wp-content/themes/lovecare/assets/images/light-logo-1-1.png"
          alt="img"
        />
        <img
          className="love-care-logo"
          src="https://smartdemowp.com/lovecare/wp-content/themes/lovecare/assets/images/shapes/upper-footer-shape-1-1.png"
          alt="img"
        />
        <div className="social-icons">
          <FaFacebookF className="social-links" />
          <FaTwitter className="social-links" />
          <BiWifi2
            style={{ fontSize: 32, transform: "rotate(45deg)" }}
            className="social-links"
          />
          <FaGooglePlusG className="social-links" />
          <FaVimeoV className="social-links" />
        </div>
      </div>
    </StyledFooter1>
  );
};

export const FooterContent2 = () => {
  return (
    <StyledFooter2>
      <Row className="main-div">
        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={24}>
          <h2>About</h2>
          <p>
            Lovecare A trusted name for caring for someone. Seniors live their
            life in their own way here what they want. <br /> <br />
            No one can bother them here, that's why they can feel free and
            independent.
          </p>
        </Col>

        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={24} className="services">
          <h2>Services</h2>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Our Guarantees</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Reviews</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </Col>

        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={24}>
          <h2>Top News</h2>
          <div style={{ display: "flex" }}>
            <img
              style={{ padding: "0px 8px 0px 0px", width: 80 }}
              src="https://smartdemowp.com/lovecare/wp-content/uploads/2020/04/footer-post-1-1.png"
              alt="img"
            />
            <div>
              <h4>The Added Value Social Worker</h4>
              <p>Mar 25, 2020</p>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: 20 }}>
            <img
              style={{ padding: "0px 8px 0px 0px", width: 80 }}
              src="https://smartdemowp.com/lovecare/wp-content/uploads/2020/04/footer-post-1-1.png"
              alt="img"
            />
            <div>
              <h4>The Added Value Social Worker</h4>
              <p>Mar 25, 2020</p>
            </div>
          </div>
        </Col>

        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={24} className="services">
          <h2>Contacts</h2>
          <p>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>

          <ul>
            <li>
              <a href="tel:+23055873407"> +2(305) 587-3407</a>
            </li>
            <li>
              <a href="mailto:info@lovecare.com"> info@lovecare.com</a>
            </li>
          </ul>
        </Col>
      </Row>
    </StyledFooter2>
  );
};

export const FooterContent3 = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <StyledFooter3>
      <div className="main-div">
        <p>LoveCare {year} All Right Reserved</p>
        <div style={{ display: "flex" }}>
          <a>Terms of Service</a>
          &nbsp;|&nbsp;
          <a>Privacy Policy</a>
        </div>
      </div>
    </StyledFooter3>
  );
};
