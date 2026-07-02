import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate();
  async function handleClick() {
  try {
    const data = { email, password };

    const response = await fetch(
      "http://localhost:5000/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    console.log(result);

    if (response.ok) {
      console.log("Login Success");

      // Save JWT
      localStorage.setItem("token", result.token);
      navigate("/")

    } else {
      console.log("Login Failed");
      console.log(result);
    }

  } catch (err) {
    console.error(err);
  }
}
  return (
    <div className="flex h-screen w-full">

      {/* LEFT IMAGE */}
      <div className="relative hidden md:block flex-1">
        <img
          src="https://t3.ftcdn.net/jpg/02/76/26/88/360_F_276268861_Y4ZHLZuZoXVkrXsjaHkaJn7xbE57dz81.jpg"
          alt="Job interview"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* RIGHT LOGIN FORM */}
      <div className="flex-1 bg-[#f3f4f6] flex items-center justify-center p-8">
        <div className="w-full max-w-[450px] py-8">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-[#0f1f45] rounded-lg flex items-center justify-center text-white">
              💼
            </div>
            <span className="font-medium text-gray-900 text-lg">
              HireHub
            </span>
          </div>

          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Welcome back
          </h1>

          <p className="text-gray-500 mb-8">
            Sign in to continue to your account
          </p>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email address
            </label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                ✉
              </span>

              <input
               value={email}
  onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:border-gray-400 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-5">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>

              <a
                href="#"
                className="text-sm font-medium text-[#0f1f45] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔒
              </span>

              <input
                type={showPwd ? "text" : "password"}
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-10 py-3 text-sm outline-none focus:border-gray-400 focus:bg-white transition"
              />

              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPwd ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <label className="flex items-center gap-2 cursor-pointer mb-6 text-sm text-gray-500">
            <input type="checkbox" />
            Remember me for 30 days
          </label>

          {/* Sign In */}
          <button onClick={handleClick} className="w-full bg-[#0f1f45] hover:bg-[#1a3060] text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2 mb-6">
            Sign in →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">
              or continue with
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3 mb-6">
            {["Google", "LinkedIn"].map((provider) => (
              <button
                key={provider}
                className="flex-1 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                {provider}
              </button>
            ))}
          </div>

         <div className="mt-6">

  <button
    onClick={() => navigate("/signup")}
    className="w-full border border-[#0f1f45] text-[#0f1f45] hover:bg-[#0f1f45] hover:text-white font-medium py-3 rounded-lg transition"
  >
    Create New Account
  </button>

</div>

<p className="text-center text-sm text-gray-500 mt-5">
  Don't have an account?{" "}

  <button
    onClick={() => navigate("/signup")}
    className="text-[#0f1f45] font-medium hover:underline"
  >
    Sign Up
  </button>

</p>

        </div>
      </div>

    </div>
  );
};

export default Login;