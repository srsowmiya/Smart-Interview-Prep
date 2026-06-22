import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const getStrength = (val) => {
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    return score;
  };

  const strengthColors = ["#e24b4a", "#ef9f27", "#378add", "#1d9e75"];
  const strengthLabels = ["Weak", "Fair", "Good", "Strong"];
  const score = getStrength(password);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f9f8" }}>
      <div style={{ background: "#fff", border: "0.5px solid #e0dfd8", borderRadius: 12, padding: "2rem 2.25rem", width: "100%", maxWidth: 400 }}>

        <div style={{ marginBottom: "1.75rem" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#eaf3de", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
            ✨
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 4px" }}>Create an account</h1>
          <p style={{ fontSize: 14, color: "#888", margin: 0 }}>Get started for free today</p>
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: "1rem" }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 6 }}>First name</label>
            <input type="text" placeholder="Jane" style={{ width: "100%", boxSizing: "border-box", padding: "8px 12px", border: "0.5px solid #ccc", borderRadius: 8, fontSize: 14 }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 6 }}>Last name</label>
            <input type="text" placeholder="Doe" style={{ width: "100%", boxSizing: "border-box", padding: "8px 12px", border: "0.5px solid #ccc", borderRadius: 8, fontSize: 14 }} />
          </div>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 6 }}>Email</label>
          <input type="email" placeholder="jane@example.com" style={{ width: "100%", boxSizing: "border-box", padding: "8px 12px", border: "0.5px solid #ccc", borderRadius: 8, fontSize: 14 }} />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 6 }}>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", padding: "8px 36px 8px 12px", border: "0.5px solid #ccc", borderRadius: 8, fontSize: 14 }}
            />
            <span onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#aaa" }}>
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>
          {password && (
            <>
              <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} style={{ height: 3, flex: 1, borderRadius: 2, background: i <= score ? strengthColors[score - 1] : "#e0dfd8" }} />
                ))}
              </div>
              <p style={{ fontSize: 12, color: strengthColors[score - 1], margin: "4px 0 0" }}>{strengthLabels[score - 1]}</p>
            </>
          )}
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 6 }}>Confirm password</label>
          <input
            type="password"
            placeholder="Repeat your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            style={{ width: "100%", boxSizing: "border-box", padding: "8px 12px", border: "0.5px solid #ccc", borderRadius: 8, fontSize: 14 }}
          />
          {confirm && (
            <p style={{ fontSize: 12, margin: "4px 0 0", color: confirm === password ? "#1d9e75" : "#e24b4a" }}>
              {confirm === password ? "✓ Passwords match" : "✗ Passwords do not match"}
            </p>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: "1.5rem" }}>
          <input type="checkbox" id="terms" style={{ marginTop: 2, cursor: "pointer" }} />
          <label htmlFor="terms" style={{ fontSize: 13, color: "#666", cursor: "pointer", lineHeight: 1.5 }}>
            I agree to the <a href="#" style={{ color: "#378add", textDecoration: "none" }}>Terms of Service</a> and <a href="#" style={{ color: "#378add", textDecoration: "none" }}>Privacy Policy</a>
          </label>
        </div>

        <button style={{ width: "100%", padding: 10, background: "#eaf3de", border: "none", borderRadius: 8, color: "#3b6d11", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
          Create account →
        </button>

        <p style={{ textAlign: "center", fontSize: 13, color: "#888", marginTop: "1.25rem" }}>
          Already have an account? <a href="#" style={{ color: "#378add", textDecoration: "none" }}>Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;