import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { SignupDataValidation } from "../utils/ValidateData";

import Alert from "./Alert";

function Signup() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [FormData, setFormData] = useState({
    FullName: "",
    Email: "",
    Password: "",
    Confirm: "",
  });
  const ChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const message = SignupDataValidation(FormData);
    setErrorMessage(message);
    if (message) return;
    setAlertMsg("SignUp successful!");
    setAlertType("success");
    setShowAlert(true);
  };
  return (
    <>
      {showAlert && (
        <div className="flex justify-center items-center">
          <Alert
            title={alertMsg}
            type={alertType}
            Email={FormData.Email}
            onClose={() => setShowAlert(false)}
            className=""
          />
        </div>
      )}
      <div className="min-h-screen flex w-auto px-24 pt-6 pl-16">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white shadow-2xl rounded-sm py-10">
          <div className="w-full max-w-md px-8">
            <h1 className="text-3xl font-bold mb-2">Hello!</h1>
            <p className="text-gray-500 mb-6">Please signup to continue</p>

            <form className="space-y-4" onSubmit={handleSignup}>
              <input
                type="text"
                name="FullName"
                placeholder="Full Name"
                value={FormData.FullName}
                onChange={ChangeFormData}
                className="w-full border-b border-gray-300 py-2 focus:outline-none"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                value={FormData.Email}
                onChange={ChangeFormData}
                className="w-full border-b border-gray-300 py-2 focus:outline-none"
                required
              />

              <input
                type="password"
                name="Password"
                placeholder="Password"
                value={FormData.Password}
                onChange={ChangeFormData}
                className="w-full border-b border-gray-300 py-2 focus:outline-none"
                required
              />

              <input
                type="password"
                name="Confirm"
                placeholder="Confirm Password"
                value={FormData.Confirm}
                onChange={ChangeFormData}
                className="w-full border-b border-gray-300 py-2 focus:outline-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#86AFA0] text-white py-3 rounded mt-6 hover:opacity-90"
              >
                Sign Up
              </button>
              {ErrorMessage && <p className="text-red-400">{ErrorMessage}</p>}
            </form>

            <div className="text-center my-4 text-gray-400">or</div>

            <div className="flex justify-center gap-4">
              <button className="w-10 h-10 rounded-full bg-sky-800 text-white flex items-center justify-center">
                <FaFacebookF className="text-lg" />
              </button>
              <button className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center">
                <FaTwitter className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-1/2 bg-[#86AFA0] items-center justify-center text-white shadow-2xl rounded-sm">
          <div className="text-center">
            <div className="text-6xl mb-4">⚽</div>
            <h2 className="text-3xl font-semibold">Soccer Ball</h2>
            <p className="mt-2">Already have an account?</p>
            <Link
              to="/"
              className="inline-block mt-4 border border-white px-6 py-2 rounded hover:bg-white hover:text-[#86AFA0]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
