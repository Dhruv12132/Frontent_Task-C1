import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-signup">

        <h2>
          SIGN UP FOR OUR DAILY INSIDER
        </h2>

        <div className="footer-subscribe">

          <input type="email" placeholder="Enter your email" />

          <Link to="/signup" className="footer-signup-button">
            Sign Up
          </Link>

          <Link to="/login" className="footer-login-button">
            Login
          </Link>

        </div>

      </div>


      <div className="footer-links">

        <div>
          <h3>
            Explore
          </h3>

          <a href="#">Home</a>
          <a href="#">Questions</a>
          <a href="#">Articles</a>
          <a href="#">Tutorials</a>
        </div>


        <div>
          <h3>
            Support
          </h3>

          <a href="#">FAQs</a>
          <a href="#">Help</a>
          <a href="#">Contact Us</a>
        </div>


        <div>
          <h3>
            Stay Connected
          </h3>

          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>

      </div>


      <div className="footer-bottom">

        <h2>
          DEV@Deakin
        </h2>

        <p>
          2026 DEV@Deakin
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Code of Conduct</a>
        </div>

      </div>

    </footer>
  )
}

export default Footer