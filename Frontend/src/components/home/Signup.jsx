import { useState } from "react";

const Signup = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const score = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  const strengthColors = [
    "bg-red-400",
    "bg-amber-400",
    "bg-blue-400",
    "bg-teal-400",
  ];

  const strengthLabels = [
    "Weak",
    "Fair",
    "Good",
    "Strong",
  ];

  return (
    <div className="flex h-screen w-full">
      {/* LEFT IMAGE */}
      <div className="relative hidden md:block flex-1">
        <img
          src="https://t4.ftcdn.net/jpg/02/76/83/17/360_F_276831797_pt3LSNMifFHn6cOnsAc60IQPd0IkKW4z.jpg"
          alt="Signup"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 bg-[#f3f4f6] flex items-center justify-center p-8">
        <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-lg p-8">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-[#0f1f45] rounded-lg flex items-center justify-center text-white">
              💼
            </div>

            <span className="text-lg font-medium text-gray-900">
              HireHub
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Create Account
          </h1>

          <p className="text-gray-500 mb-8">
            Join HireHub and start your career journey
          </p>

          <div className="space-y-5">
            {/* Name */}
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPwd ? "🙈" : "👁"}
                </button>
              </div>

              {password.length > 0 && (
                <>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={
                          "h-1 flex-1 rounded-full " +
                          (i <= score
                            ? strengthColors[Math.max(score - 1, 0)]
                            : "bg-gray-200")
                        }
                      />
                    ))}
                  </div>

                  <p className="text-xs mt-1 text-gray-500">
                    {strengthLabels[Math.max(score - 1, 0)]}
                  </p>
                </>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Repeat password"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400"
              />

              {confirm.length > 0 && (
                <p
                  className={
                    "text-xs mt-1 " +
                    (confirm === password
                      ? "text-green-600"
                      : "text-red-500")
                  }
                >
                  {confirm === password
                    ? "✓ Passwords match"
                    : "✗ Passwords do not match"}
                </p>
              )}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />

              <span className="text-sm text-gray-500">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-[#0f1f45] font-medium hover:underline"
                >
                  Terms
                </a>{" "}
                &{" "}
                <a
                  href="#"
                  className="text-[#0f1f45] font-medium hover:underline"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit */}
            <button className="w-full bg-[#0f1f45] hover:bg-[#1a3060] text-white py-3 rounded-xl font-medium transition">
              Create Account →
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#0f1f45] font-medium hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;