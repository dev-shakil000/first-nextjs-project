import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { Row, Col, Form, notification } from "antd";
import { InputWrapper, TextAreaWrapper } from "../inputs";
import SelectWrapper from "../inputs/selectWrapper";
import PhoneInputWrapper from "../inputs/phoneInputWrapper";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { SubmitButton } from "../inputs/buttons";

const StyledDiv = Styled.div`
padding: 5% 5% 0% 5%;

.form-div{
    padding: 0px 8%;
    .section-header{
        color: #5bb286;
        font-weight: 700;
    }
    .main-heading{
        font-weight: 700;
        font-size: 32px;
    }
}
`;

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  discussionFor: "",
  message: "",
  phoneError: "",
};

const AppointmentWrapper = () => {
  const [form] = Form.useForm();
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => {
        console.log("Response received > ", res);
        if (res.status === 200) {
          setLoading(false);
          console.log("Response succeeded > ", res);
          form.resetFields();
          setState(initialState);
          notification.success({
            message: "Form Submitted",
            description: "Thank you for your interest in LoveCare",
          });
        } else {
          notification.error({
            message: "Form not Submitted",
            description: "Something went wrong, Please try again",
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isValidPhoneNumber(state.phone)) {
      setState({
        ...state,
        phoneError: "",
      });
    }
  }, [state.phone]);

  return (
    <StyledDiv>
      <Row>
        <img
          style={{
            position: "absolute",
            zIndex: -2,
            opacity: 0.05,
            width: "100%",
            left: 0,
            // right: 0,
            // bottom: 0,
            // top: 0,
          }}
          src="https://smartdemowp.com/lovecare/wp-content/themes/lovecare/assets/images/svgs/event-bg-map-1.svg"
          alt="img"
        />
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          {/* Yellow dots */}
          <img
            style={{
              width: "65%",
              position: "absolute",
              top: "15%",
              zIndex: -1,
            }}
            src="https://smartdemowp.com/lovecare/wp-content/themes/lovecare/assets/images-2/shape/shape-33.png"
            alt="img"
          />

          {/* Red dots */}
          <img
            style={{
              width: "65%",
              position: "absolute",
              top: "20%",
              left: "35%",
              zIndex: -1,
            }}
            src="https://smartdemowp.com/lovecare/wp-content/themes/lovecare/assets/images-2/shape/shape-34.png"
            alt="img"
          />

          {/* man pic */}
          <img
            style={{ width: "100%" }}
            src="https://smartdemowp.com/lovecare/wp-content/uploads/2020/04/appointment-person-1-1.png"
            alt="img"
          />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} id="contact_us">
          <div className="form-div">
            <h3 className="section-header">07. Appointment</h3>
            <h1 className="main-heading">
              Want to Hear More About LoveCare Hospice?
            </h1>

            <Form
              // onFinish={handleContactUs}
              form={form}
              autoComplete="new-password"
              validateTrigger="onFinish"
            >
              <Row gutter={[40, 20]}>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
                  <Form.Item
                    name="Full Name"
                    rules={[
                      {
                        required: true,
                        type: "string",
                        max: 50,
                      },
                    ]}
                  >
                    <InputWrapper
                      autoComplete="new-password"
                      placeholder="Full Name"
                      name="fullName"
                      value={state.fullName}
                      onChange={handleChange}
                      maxLength={50}
                    />
                  </Form.Item>
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
                  <Form.Item
                    name="Email"
                    rules={[{ required: true, type: "email" }]}
                  >
                    <InputWrapper
                      autoComplete="new-password"
                      placeholder="Email"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Col>

                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
                  <PhoneInputWrapper
                    name="phone"
                    autoComplete="new-password"
                    value={state.phone}
                    placeholder="Phone Number"
                    onChange={handleChange}
                    error={state.phoneError}
                  />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
                  <Form.Item
                    name="discussionFor"
                    rules={[
                      {
                        required: true,
                        type: "string",
                        message: "This field is required",
                      },
                    ]}
                  >
                    <SelectWrapper
                      placeholder="Discussion For"
                      options={[
                        { label: "Basic Query", value: "Basic Query" },
                        {
                          label: "Patient Admission",
                          value: "Patient Admission",
                        },
                      ]}
                      value={state.discussionFor}
                      onChange={(val) =>
                        setState((prev) => ({ ...prev, discussionFor: val }))
                      }
                    />
                  </Form.Item>
                </Col>
                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                  <Form.Item
                    name="Message"
                    rules={[
                      {
                        required: true,
                        type: "string",
                        max: 500,
                      },
                    ]}
                  >
                    <TextAreaWrapper
                      placeholder="Message"
                      name="message"
                      value={state.message}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={24}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 40,
                  }}
                >
                  <SubmitButton
                    htmlType="submit"
                    loading={loading}
                    // onClick={checkPhone}
                    // color="#fff"
                    onClick={() => {
                      // handleSubmit();
                      if (!isValidPhoneNumber(state.phone)) {
                        setState({
                          ...state,
                          phoneError: "Invalid phone number",
                        });
                      } else {
                        handleSubmit();
                      }
                    }}
                  >
                    Submit Now
                  </SubmitButton>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </StyledDiv>
  );
};
export default AppointmentWrapper;
