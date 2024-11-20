import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Hamburger from "../hamburger";

const StyledHeader = styled.header`
  display: flex;
  align-items: end;
  .main-row {
    padding: 0px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h3 {
      margin-left: 20px;
      margin-right: 20px;
    }
    a:hover {
      color: #5bb286;
    }
  }

  @media (max-width: 1200px) {
    .main-row {
      h3 {
        margin-left: 14px;
        margin-right: 14px;
      }
    }
  }
`;

const HeaderContent = () => {
  const router = useRouter();
  const [mobileView, setMobileView] = useState();
  const [click, setClick] = useState(false); // To show and hide mobile menu
  const [serviceSubNav, setserviceSubNav] = useState(0);
  const [technologySubNav, settechnologySubNav] = useState(0);
  const [scroll, setScroll] = useState(0); // To change background-color of header
  const [burgerMenuDisplay, setBurgerMenuDisplay] = useState("");

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  /**
   * This useEffect function is used to change header background-color
   */
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth <= 991) {
          setBurgerMenuDisplay("flex");
          setMobileView(true);
        }
        if (window.innerWidth > 991) {
          setBurgerMenuDisplay("none");
          setMobileView(false);
        }
      }
    };
    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
  }, []);

  const setHeaderBackground = () => {
    if (router.pathname === "/") {
      return scroll < 100 ? "transparent" : "#fff";
    } else {
      return "#fff";
    }
  };
  const setHeaderOpacity = () => {
    if (router.pathname === "/") {
      return scroll < 100 ? 1 : 1;
    } else {
      return 1;
    }
  };

  const setHeaderBoxShadow = () => {
    if (router.pathname === "/") {
      return scroll < 100 ? "none" : "0 0.125rem 0.25rem rgb(0 0 0 / 8%)";
    } else {
      return "0 0.125rem 0.25rem rgb(0 0 0 / 8%)";
    }
  };

  const setHeaderDisplay = () => {
    if (router.pathname === "/") {
      return scroll < 100 ? "flex" : "flex";
    } else {
      return "flex";
    }
  };

  return (
    <StyledHeader>
      <div
        style={{
          backgroundColor: setHeaderBackground(),
          opacity: setHeaderOpacity(),
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 220,
          height: 82,
          boxShadow: setHeaderBoxShadow(),
          transition: "0.6s ease",
          display: setHeaderDisplay(),
        }}
        className="py-2"
      >
        <Row className="main-row">
          <div>
            <img
              style={{ width: 200 }}
              src="https://smartdemowp.com/lovecare/wp-content/uploads/2020/06/dark-logo-1-1-1.png"
            />
          </div>

          {mobileView ? (
            <Hamburger />
          ) : (
            <div style={{ display: "flex" }}>
              <h3>
                <Link href="#home">
                  <a>Home</a>
                </Link>
              </h3>
              <h3>
                <Link href="#fund_raise">
                  <a>Fund Raise</a>
                </Link>
              </h3>
              <h3>
                <Link href="#about_us">
                  <a>About Us</a>
                </Link>
              </h3>
              <h3>
                <Link href="#services">
                  <a>Services</a>
                </Link>
              </h3>
              <h3>
                <Link href="#testimonials">
                  <a>Testimonial</a>
                </Link>
              </h3>
              <h3>
                <Link href="#faq">
                  <a>{"FAQ's"}</a>
                </Link>
              </h3>
              <h3>
                <Link href="#contact_us">
                  <a>Contact</a>
                </Link>
              </h3>
            </div>
          )}
        </Row>
      </div>
    </StyledHeader>
  );
};

export default HeaderContent;
