import "./forgetPassword.css";
import { Link } from "react-router-dom";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function ForgetPassword() {
  return (
    <div className="forgetPage">
      <div className="forgetCard">
        <div className="forgetLogo">
          <HiOutlineAcademicCap />
        </div>

        <h1>Forgot Password?</h1>

        <p>
          Enter your User ID or registered email address and we'll send you a
          password reset link.
        </p>

        <form className="forgetForm">
          <div className="formGroup">
            <label htmlFor="userId">User ID / Email</label>
            <input
              type="text"
              id="userId"
              placeholder="Enter your User ID or Email"
            />
          </div>

          <button type="submit" className="resetBtn">
            Send Reset Link
          </button>
        </form>

        <Link to="/login" className="backToLogin">
          ← Back to Login
        </Link>
      </div>
    </div>
  );
}