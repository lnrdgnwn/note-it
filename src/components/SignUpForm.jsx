import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/workspace");
    }
  }, [currentUser, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      return toast.error("Password harus memiliki minimal 8 karakter.");
    }

    if (password !== confirmPassword) {
      return toast.error("Password dan konfirmasi password tidak cocok.");
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        navigate("/login");
        console.log(user);
        toast.success("Berhasil masuk dengan email!");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Terjadi kesalahan saat masuk dengan email.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleSignIn = async (isSignUp = false) => {
    setLoadingGoogle(true);
    try {
      await setPersistence(auth, browserLocalPersistence);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        setCurrentUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success(
          isSignUp
            ? "Akun Google berhasil dibuat!"
            : "Berhasil masuk dengan akun Google!"
        );
        navigate("/workspace");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat masuk dengan Google.");
      console.log(error.message);
    } finally {
      setLoadingGoogle(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full lg:gap-32">
      <figure className="w-[600px] hidden lg:block">
        <img src="images/auth/auth.svg" alt="Auth Image" className="w-full" />
      </figure>

      <div className="w-full max-w-xl lg:max-w-lg p-8 bg-white rounded-3xl border-2 border-primary shadow-lg">
        <figure className="flex items-center justify-center">
          <img src="/images/logo/Logo.svg" alt="Logo" className="w-24" />
        </figure>
        <h1 className="text-center text-2xl font-bold mb-3 text-inter">
          Sign Up
        </h1>

        <form onSubmit={handleSignUp} className="space-y-3">
          <div className="flex flex-col gap-3">
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

          <div className="flex flex-col gap-3 relative">
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

          <div className="flex flex-col gap-3 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-xl font-medium text-inter"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border text-inter border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
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
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 text-center text-inter text-gray-500">
          <p>
            Already have an account?{" "}
            <span className="text-primary text-inter hover:text-gray-500 cursor-pointer hover:underline">
              <a href="/login">Log in</a>
            </span>
          </p>
        </div>

        <div className="flex items-center mt-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <p className="mx-4 text-center text-inter">OR</p>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex items-center text-inter duration-200 hover:bg-primary hover:text-white justify-center gap-2 mt-4 px-6 py-2 border w-full border-gray-300 rounded-md text-gray-700"
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

export default SignUpForm;
