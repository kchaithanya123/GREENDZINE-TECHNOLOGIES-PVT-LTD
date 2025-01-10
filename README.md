# GREENDZINE-TECHNOLOGIES-PVT-LTD
OTP-Based Authentication System
A secure web application that replaces traditional password-based logins with a One-Time Password (OTP)-based authentication system. This project ensures enhanced user security by implementing a dynamic authentication mechanism.

Features
OTP Generation: Generates a random 6-digit OTP for user login.
OTP Validation: Verifies the OTP within a 30-second timer.
Resend OTP: Allows users to request a new OTP upon expiration.
Dashboard Access: Provides access to the dashboard upon successful authentication.
Dynamic Routing: Uses HashRouter for seamless navigation.
Deployment-Ready: Optimized for hosting on platforms like Netlify or Vercel.
Tech Stack
Frontend: React.js
Routing: HashRouter
Charts: Chart.js / Apex Chart (future feature)
Hosting: Netlify or Vercel
App Flow
Login Screen: Users are prompted to enter the OTP sent to their email or mobile.
Dashboard: Users who successfully validate the OTP are redirected here.
Resend OTP: Displays a message if the OTP has expired and allows users to request a new OTP.
