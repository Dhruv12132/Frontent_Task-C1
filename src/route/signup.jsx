import { signUpWithEmailAndPassword } from "../route/firebase.js";  
import { useState } from "react";
import "./Signup.css";
function Signup() {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = () => {
        signUpWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User signed up:", user);
            })
    };  



    return (
        <div className="signup-container">
            <h1>Create a DEV@Deakin Account</h1>
<form> 
    <label> Name </label>
    <input type = "text" placeholder = "Enter Full Name" value  = {username} onChange = {(e) => setusername(e.target.value)} required />
    <label> Email </label>
    <input type = "email" placeholder = "Enter Email" value  = {email} onChange = {(e) => setEmail(e.target.value)} required />
    <label> Password </label>
    <input type = "password" placeholder = "Enter Password" value  = {password} onChange = {(e) => setPassword(e.target.value)} required />
    <label> Confirm Password </label>
    <input type = "password" placeholder = "Confirm Password" value  = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} required />    


            <button className="signup-button" onClick={handleSignUp}>
                Sign Up
            </button>  

</form>
        </div>
    );
}

export default Signup
