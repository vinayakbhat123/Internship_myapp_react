import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "./Alert";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("success");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin@123") {
      setAlertMsg("Login successful!");
      setAlertType("success");
      setShowAlert(true);
    } else {
      setAlertMsg("Login Failed");
      setAlertType("Success");
      setShowAlert(true);
    }
  };

  return (
    <>
      {showAlert && (
        <div className="flex justify-center items-center">
          <Alert
            title={alertMsg}
            type={alertType}
            Email={email}
            onClose={() => setShowAlert(false)}
            className=""
          />
        </div>
      )}
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
            MyApp Login{" "}
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="*******"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700 "
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
