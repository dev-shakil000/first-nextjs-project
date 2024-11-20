import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

const PhoneInputWrapper = (props) => {
  const { onChange, name, placeholder, defaultCountry, error, value } = props;

  const handleChange = (val) => {
    if (val === undefined || val === null) {
      onChange({ target: { name, value: "" } });
    } else if (typeof val === "string") {
      onChange({ target: { name, value: val } });

      // if (isValidPhoneNumber(val)) {
      //   onChange({ target: { name: "phoneError", value: null } });
      // }
    }
  };

  return (
    <>
      <PhoneInput
        className="phone-input-div"
        style={{
          border: error ? "1px solid #d1d1d1" : "1px solid #d1d1d1",
        }}
        autoComplete="new-password"
        placeholder={placeholder}
        defaultCountry={defaultCountry}
        value={value}
        onChange={handleChange}
        disabled={props.disabled}
        // onBlur={() => {
        //   onChange({ target: { name: "error", value: null } });
        //   if (!isValidPhoneNumber(state.value)) {
        //     setState((prev) => ({ ...prev, error: "Invalid phone number" }));
        //     onChange({ target: { name: "phoneError", value: "Invalid phone number" } });
        //   }
        // }}
      />
      <div style={{ color: "#FF4752", position: "absolute" }}>{error}</div>
    </>
  );
};

PhoneInputWrapper.defaultProps = {
  placeholder: "Phone",
  defaultCountry: "US",
};

export default PhoneInputWrapper;
