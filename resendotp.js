import React from "react";
import { useNavigate } from "react-router-dom";

const ResendOTP = () => {
  const navigate = useNavigate();

  const handleResend = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="resend-otp-container">
      <h1>OTP Expired</h1>
      <p>Your OTP has expired. Please request a new OTP.</p>
      <button onClick={handleResend}>Resend OTP</button>
    </div>
  );
};

export default ResendOTP;
