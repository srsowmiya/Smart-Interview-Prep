import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f9f8" }}>
      <div style={{ background: "#fff", border: "0.5px solid #e0dfd8", borderRadius: "12px", padding: "2rem 2.25rem", width: "100%", maxWidth: "380px" }}>

        <div style={{ marginBottom: "1.75rem" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#e6f1fb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
            👤
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 4px" }}>Welcome back</h1>
          <p style={{ fontSize: 14, color: "#888", margin: 0 }}>Sign in to your account</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 6 }}>Name</label>
            <input type="text" placeholder="Your name" style={{ width: "100%", padding: "8px 12px", border: "0.5px solid #ccc", borderRadius: 8, fontSize: 14, boxSizing: "border-box" }} />
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 6 }}>Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                style={{ width: "100%", padding: "8px 36px 8px 12px", border: "0.5px solid #ccc", borderRadius: 8, fontSize: 14, boxSizing: "border-box" }}
              />
              <span onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", cursor: "pointer", fontSize: 16, color: "#aaa" }}>
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>
            <div style={{ textAlign: "right", marginTop: 6 }}>
              <a href="#" style={{ fontSize: 12, color: "#378add", textDecoration: "none" }}>Forgot password?</a>
            </div>
          </div>
        </div>

        <button style={{ width: "100%", padding: "10px", background: "#e6f1fb", border: "none", borderRadius: 8, color: "#185fa5", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
          Sign in →
        </button>

        <p style={{ textAlign: "center", fontSize: 13, color: "#888", marginTop: "1.25rem" }}>
          Don't have an account? <a href="#" style={{ color: "#378add", textDecoration: "none" }}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;