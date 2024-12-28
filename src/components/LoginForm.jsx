import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const { currentUser, setCurrentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/workspace");
    }
  }, [currentUser, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await setPersistence(auth, browserLocalPersistence); // Ensure persistence is set
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setCurrentUser(user);
      localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage
      toast.success("Berhasil masuk dengan email!");
    } catch (error) {
      toast.error("Terjadi kesalahan saat masuk dengan email.");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoadingGoogle(true);
    try {
      await setPersistence(auth, browserLocalPersistence); // Ensure persistence is set
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setCurrentUser(user);
      localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage
      toast.success("Berhasil masuk dengan akun Google!");
      navigate("/workspace");
    } catch (error) {
      toast.error("Terjadi kesalahan saat masuk dengan Google.");
      console.log(error.message);
    } finally {
      setLoadingGoogle(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen lg:gap-32">
      <figure className="w-[600px] hidden lg:block">
        <img src="images/auth/auth.svg" alt="Auth Image" className="w-full" />
      </figure>

      <div className="w-full max-w-xl lg:max-w-lg p-8 bg-white rounded-3xl border-2 border-primary shadow-lg">
        <figure className="flex items-center justify-center">
          <img src="/images/logo/Logo.svg" alt="Logo" className="w-32" />
        </figure>

        <h1 className="text-center text-2xl font-bold mb-3 text-inter">
          Log in
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="block text-xl font-medium text-inter"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border text-inter border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-4">
            <label
              htmlFor="password"
              className="block text-xl font-medium text-inter"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border text-inter border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="w-6 h-6 text-gray-500" />
                ) : (
                  <FaEye className="w-6 h-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#32312F] text-inter text-white py-2 rounded"
            disabled={loading}
          >
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>

        <div className="mt-3 text-center text-inter text-gray-500">
          <p>
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")} // Navigate to /signup route
              className="text-primary text-inter hover:text-gray-500 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>

        <div className="flex items-center mt-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <p className="mx-4 text-center text-inter">OR</p>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex items-center text-inter duration-200 hover:bg-primary hover:text-white justify-center gap-2 mt-2 px-6 py-2 border w-full border-gray-300 rounded-md text-gray-700"
          disabled={loadingGoogle}
        >
          <img
            src="images/auth/google.svg"
            alt="Google icon"
            className="w-4 h-4"
          />
          {loadingGoogle ? "Loading..." : "Continue with Google"}
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
