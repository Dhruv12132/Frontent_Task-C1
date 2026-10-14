
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.js";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Save user details in Firestore
                return setDoc(doc(db, "users", user.uid), {
                    name: username,
                    email: email
                });
            })
            .then(() => {
                alert("Signup successful");
                navigate("/login");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="signup-container">
            <h1>Create a DEV@Deakin Account</h1>

            <form onSubmit={handleSignUp}>
                <label>Name</label>
                <input placeholder="Enter Full Name" type="text" value={username} onChange={(e) => setusername(e.target.value)} required
                />

                <label>Email</label>
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required
                />

                <label>Password</label>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required
                />

                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required
                />

                <button className="signup-button" type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;
