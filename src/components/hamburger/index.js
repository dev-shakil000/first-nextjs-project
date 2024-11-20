import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { eforteBlackLogo } from "../../../images";
import { Slide, Fade } from "react-awesome-reveal";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";

const StyledDiv = styled.div`
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 6;
  font-size: 20px;
  font-weight: 900;
  font-family: sans-serif;
  > span {
    text-transform: none;
    opacity: 0.5;
    font-weight: 300;
    font-size: 12px;
  }
  input + label {
    position: fixed;
    top: 32px;
    right: 40px;
    height: 20px;
    width: 22px;
    z-index: 5;
    span {
      background-color: #5bb286;
      position: absolute;
      width: 100%;
      height: 2px;
      top: 50%;
      margin-top: -1px;
      left: 0;
      display: block;
      transition: 0.5s;
    }
    span:first-child {
      top: 3px;
    }
    span:last-child {
      top: 16px;
    }
  }
  label:hover {
    cursor: pointer;
  }
  input:checked + label {
    span {
      opacity: 0;
      top: 50%;
    }
    span:first-child {
      opacity: 1;
      transform: rotate(405deg);
    }
    span:last-child {
      opacity: 1;
      transform: rotate(-405deg);
    }
  }
  input ~ nav {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 82px;
    box-shadow: rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem;
    z-index: 3;
    transition: 0.5s;
    transition-delay: 0.5s;
    overflow: hidden;
    > ul {
      display: none;
      text-align: center;
      position: absolute;
      top: 18%;
      width: 100%;
      list-style: none;
      height: 78%;
      overflow: auto;
      > li {
        opacity: 0;
        transition: none;
        transition-delay: 0s;
        color: rgb(69, 80, 98);
        > a {
          text-decoration: none;
          font-weight: 700;
          font-family: sans-serif;
          display: block;
          padding: 16px 0px;
          color: rgb(69, 80, 98);
          transition: none;
          &:hover {
            color: #fff;
          }
        }
        &:hover {
          transition: none;
          color: #fff;
          background-color: rgba(122, 59, 150, 0.85);
        }
      }
    }
  }
  input:checked ~ nav {
    height: 70%;
    overflow: auto;
    transition-delay: 0s;
    > ul {
      display: block;
      > li {
        opacity: 1;
        transition-delay: 0.3s;
      }
    }
  }

  .drop-down-div {
    a {
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: rgb(69, 80, 98);
      font-weight: 400;
      &:hover {
        color: #fff;
        background-color: rgba(122, 59, 150, 0.85);
      }
    }
  }
`;

const servicesMenuItems = [
  {
    key: "all-services",
    link: "/services",
    text: "All Services",
  },
  {
    key: "mobile-app-development",
    link: "/mobile-app-development",
    text: "Mobile Apps Development",
  },
  {
    key: "web-app-development",
    link: "/web-app-development",
    text: "Web Application Development",
  },
  {
    key: "ui-ux-design",
    link: "/ui-ux-design",
    text: "UI / UX Design",
  },
  {
    key: "product-design-and-strategy",
    link: "/products-designin-strategy",
    text: "Product Design & Strategy",
  },
  {
    key: "product-prototyping",
    link: "/product-prototyping",
    text: "Startup MVP and Product Prototyping",
  },
  {
    key: "ecommerece-and-online-stores",
    link: "/ecommerece-and-online-stores",
    text: "Ecommerce & Online Stores",
  },
  {
    key: "technical-consulting",
    link: "/technical-consulting",
    text: "Technical Consulting",
  },
  {
    key: "blockchain-hyperledger-ethereum",
    link: "/blockchain-hyperledger-ethereum",
    text: "Blockchain in Hyperledger & Ethereum",
  },
  {
    key: "business-dashboard",
    link: "/business-dashboard",
    text: "Business Dashboard",
  },
  {
    key: "video-and-animation",
    link: "/video-and-animation",
    text: "Video & Animation",
  },
];

const technologiesMenuItems = [
  {
    key: "all-technology",
    link: "/technology",
    text: "All Technology",
  },
  {
    key: "multi-platform-apps",
    link: "/multi-platform-app",
    text: "Multi-Platform Apps",
  },
  {
    key: "online-shopping",
    link: "/online-shopping",
    text: "Online Shopping",
  },
  // {
  //   key: "digital-marketing",
  //   link: "/digital-marketing",
  //   text: "Digital Marketing",
  // },
  { key: "startups", link: "/startups", text: "Startups" },
  { key: "ai", link: "/ai", text: "AI" },
  { key: "iot", link: "/iot", text: "IOT" },
  { key: "cms", link: "/cms", text: "CMS" },
  {
    key: "web-application-development",
    link: "/web-application-development",
    text: "Web Application",
  },
];

const Hamburger = ({ router, display }) => {
  const inputRef = useRef();

  const [dropDownServices, setDropDownServices] = useState("none");
  const [dropDownTechnologies, setDropDownTechnologies] = useState("none");

  return (
    <StyledDiv style={{ display: display }}>
      <input ref={inputRef} id="burger" type="checkbox" />

      <label
        onClick={() => {
          setDropDownServices("none");
        }}
        for="burger"
      >
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav>
        <Col
          span={24}
          style={{
            paddingLeft: 36,
            paddingTop: 12,
            position: "fixed",
          }}
        >
          <Link href="/">
            <a
              onClick={() => {
                inputRef.current.checked = false;
              }}
            >
              <img
                src="https://smartdemowp.com/lovecare/wp-content/uploads/2020/06/dark-logo-1-1-1.png"
                style={{ width: 200 }}
              />
            </a>
          </Link>
        </Col>
        <ul>
          <Slide triggerOnce direction="down" duration={1000}>
            <li>
              <Link href="#home">
                <a
                  onClick={() => {
                    inputRef.current.checked = false;
                  }}
                >
                  Home
                </a>
              </Link>
            </li>

            <li>
              <Link href="#fund_raise">
                <a
                  onClick={() => {
                    inputRef.current.checked = false;
                  }}
                >
                  Fund Raise
                </a>
              </Link>
            </li>

            <li>
              <Link href="#about_us">
                <a
                  onClick={() => {
                    inputRef.current.checked = false;
                  }}
                >
                  About Us
                </a>
              </Link>
            </li>

            <li>
              <Link href="#services">
                <a
                  onClick={() => {
                    inputRef.current.checked = false;
                  }}
                >
                  Services
                </a>
              </Link>
            </li>

            <li>
              <Link href="#testimonials">
                <a
                  onClick={() => {
                    inputRef.current.checked = false;
                  }}
                >
                  Testimonial
                </a>
              </Link>
            </li>

            <li>
              <Link href="#faq">
                <a
                  onClick={() => {
                    inputRef.current.checked = false;
                  }}
                >
                  {"FAQ's"}
                </a>
              </Link>
            </li>

            <li>
              <Link href="#contact_us">
                <a
                  onClick={() => {
                    inputRef.current.checked = false;
                  }}
                >
                  Contact
                </a>
              </Link>
            </li>
          </Slide>
        </ul>
      </nav>
    </StyledDiv>
  );
};

export default Hamburger;
