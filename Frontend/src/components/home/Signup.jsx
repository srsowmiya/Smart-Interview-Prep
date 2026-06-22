import { useState } from "react";

const Signup = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const score = [password.length >= 8, /[A-Z]/.test(password), /[0-9]/.test(password), /[^A-Za-z0-9]/.test(password)].filter(Boolean).length;
  const strColors = ["bg-red-400", "bg-amber-400", "bg-blue-400", "bg-teal-400"];
  const strLabels = ["Weak", "Fair", "Good", "Strong"];
  const strTextColors = ["text-red-300", "text-amber-300", "text-blue-300", "text-teal-300"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-400 p-6">
      <div className="relative overflow-hidden w-full max-w-sm rounded-2xl bg-white/9 backdrop-blur-xl border border-white/20 p-8 text-white">

        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/4 pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-block text-xs font-medium bg-white/12 px-3 py-1 rounded-full mb-4">Create account</span>

          <div className="mb-6">
            <div className="w-10 h-10 rounded-full bg-white/12 border border-white/20 flex items-center justify-center mb-3">
              <span className="text-lg">✨</span>
            </div>
            <h1 className="text-xl font-medium mb-1">Get started</h1>
            <p className="text-white/55 text-sm">Create your free account</p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              {[["First name", "Jane"], ["Last name", "Doe"]].map(([lbl, ph]) => (
                <div key={lbl} className="flex-1">
                  <label className="block text-white/65 text-xs font-medium mb-1.5">{lbl}</label>
                  <input type="text" placeholder={ph}
                    className="w-full bg-white/10 border border-white/22 rounded-xl px-3 py-2.5 text-white placeholder-white/40 text-sm outline-none focus:border-white/55 transition" />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-white/65 text-xs font-medium mb-1.5">Email</label>
              <input type="email" placeholder="you@example.com"
                className="w-full bg-white/10 border border-white/22 rounded-xl px-4 py-2.5 text-white placeholder-white/40 text-sm outline-none focus:border-white/55 transition" />
            </div>

            <div>
              <label className="block text-white/65 text-xs font-medium mb-1.5">Password</label>
              <div className="relative">
                <input type={showPwd ? "text" : "password"} placeholder="Min. 8 chars"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/10 border border-white/22 rounded-xl px-4 py-2.5 pr-10 text-white placeholder-white/40 text-sm outline-none focus:border-white/55 transition" />
                <button onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/45 hover:text-white/75 transition text-sm">
                  {showPwd ? "🙈" : "👁"}
                </button>
              </div>
              {password && (
                <>
                  <div className="flex gap-1 mt-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className={`h-0.5 flex-1 rounded-full transition-all ${i <= score ? strColors[score-1] : "bg-white/18"}`} />
                    ))}
                  </div>
                  <p className={`text-xs mt-1 ${strTextColors[score-1]}`}>{strLabels[score-1]}</p>
                </>
              )}
            </div>

            <div>
              <label className="block text-white/65 text-xs font-medium mb-1.5">Confirm password</label>
              <input type="password" placeholder="Repeat password"
                value={confirm} onChange={(e) => setConfirm(e.target.value)}
                className="w-full bg-white/10 border border-white/22 rounded-xl px-4 py-2.5 text-white placeholder-white/40 text-sm outline-none focus:border-white/55 transition" />
              {confirm && (
                <p className={`text-xs mt-1 ${confirm === password ? "text-teal-300" : "text-red-300"}`}>
                  {confirm === password ? "✓ Passwords match" : "✗ Does not match"}
                </p>
              )}
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-0.5 accent-white" />
              <span className="text-white/60 text-xs leading-relaxed">
                I agree to the <a href="#" className="text-white font-medium">Terms</a> &amp; <a href="#" className="text-white font-medium">Privacy Policy</a>
              </span>
            </label>

            <button className="w-full bg-white/88 text-teal-700 font-medium py-2.5 rounded-xl text-sm hover:bg-white transition flex items-center justify-center gap-2">
              Create account →
            </button>
          </div>

          <p className="text-center text-white/45 text-xs mt-5">
            Have an account? <a href="#" className="text-white font-medium">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;