
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>

        <p className="signup-link">
          New to DEV@Deakin? <Link to="/signup">Sign up</Link>
        </p>

        <form>
          <label htmlFor="email">Your email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
          />

          <label htmlFor="password">Your password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
          />

          <button type="button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
