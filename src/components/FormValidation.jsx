import React, { useState } from "react";
import axios from "axios";
import "./formValidation.css";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!validatePassword(password)) {
      newErrors.password = "password should have 8 characters length";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "password didnot match";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("form submitted successfully");
      try {
        const response = await axios.post(
          "https://your-api-endpoint/register",
          {
            email,
            password,
          }
        );
        if (response.status === 200) {
          console.log("registration success");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        } else {
          setErrors({ apiErrors: "Registration failed" });
        }
      } catch (error) {
        setErrors({ apiErrors: "an error occured, please try again" });
      }
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      {errors.apiErrors && <span>{errors.apiErrors}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
