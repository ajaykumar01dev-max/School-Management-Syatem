import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #10192d 0%, #1d4ccd 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            margin: "0 auto 24px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "48px",
            color: "#6ea2ff",
          }}
        >
          <HiOutlineAcademicCap />
        </div>

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
            fontWeight: "700",
          }}
        >
          School Management System
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "18px",
            marginBottom: "30px",
          }}
        >
          Smart School. Better Future.
        </p>

        <div
          style={{
            width: "220px",
            height: "4px",
            margin: "0 auto",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.15)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#6ea2ff",
              animation: "loading 2s linear forwards",
            }}
          />
        </div>

        <p
          style={{
            marginTop: "16px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          Redirecting to Login...
        </p>
      </div>

      <style>
        {`
          @keyframes loading {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>
    </div>
  );
}