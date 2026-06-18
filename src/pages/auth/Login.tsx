import "./login.css";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { PiStudentLight } from "react-icons/pi";
import { LiaReadme } from "react-icons/lia";
import { PiCertificateThin } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="loginPage">
      <div className="loginPageContant">
        <div className="leftSide">
          <div className="topLogo">
            <div className="topIcon">
              <HiOutlineAcademicCap />
            </div>
            <div className="topTitle">
              <h3>School Management System</h3>
              <p>Smart School, Better Future.</p>
            </div>
          </div>

          <div className="academics">
            ACADEMIC YEAR 2026 - 2027
          </div>

          <h1>Empowering Excellence in Education.</h1>

          <p>
            Simplify school operations, manage academics, and enhance
            communication through one integrated platform.
          </p>

          <div className="cardRow">
            <div className="totalStudent">
              <div className="icon">
                <PiStudentLight size={20} />
              </div>
              <div className="number">4,820</div>
              <p className="title">Students Enrolled</p>
            </div>

            <div className="totalStudent">
              <div className="icon">
                <LiaReadme size={20} />
              </div>
              <div className="number">125</div>
              <p className="title">Active Courses</p>
            </div>

            <div className="totalStudent">
              <div className="icon">
                <PiCertificateThin size={20} />
              </div>
              <div className="number">98.6%</div>
              <p className="title">Graduation Rate</p>
            </div>
          </div>
        </div>

        <div className="rightSide">
          <div className="rightCenter">
            <div className="rightHeader">
              <h2>Welcome Back</h2>
              <p>Please sign in to your account.</p>
            </div>

            <form action="" method="post" className="loginForm">
              <div className="formGroup">
                <label htmlFor="userId">User ID</label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  placeholder="Enter your user ID"
                />
              </div>

              <div className="formGroup">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="forgotPassword">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>

              <button type="submit" className="loginBtn">
                Login
              </button>

              <div className="demoCredentials">
                <p>Demo Credentials</p>
                <span>User ID: admin</span>
                <span>Password: admin123</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}