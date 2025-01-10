import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [inputOtp, setInputOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    generateOtp();
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const generateOtp = () => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(generatedOtp.toString());
    alert(`Your OTP is: ${generatedOtp}`); // Alerting OTP
  };

  const handleVerify = () => {
    if (inputOtp === otp && timer > 0) {
      navigate("/dashboard");
    } else if (timer === 0) {
      navigate("/resend-otp");
    } else {
      alert("Incorrect OTP!");
    }
  };

  return (
    <div className="login-container">
      <h1>OTP Login</h1>
      <p>Enter the OTP sent to your mobile/email:</p>
      <input
        type="text"
        value={inputOtp}
        onChange={(e) => setInputOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleVerify}>Verify OTP</button>
      <p>OTP expires in: {timer}s</p>
    </div>
  );
};

export default Login;
