import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, setTnc } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Your Email Address
          </label>
          <input
            type="text"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Your Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.passsword}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Your Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Enter your confirm password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Your Full Name
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your full name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="phoneNumber" className="form-label">
            Your Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            className="form-input"
            placeholder="Enter your phone number"
            value={values.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>

        <div className="form-inputs">
          <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
          <span className="form-input-span">
            {" "}
            I read and agree Terms and Conditions
          </span>
          {errors.checked && <p>{errors.checked}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
