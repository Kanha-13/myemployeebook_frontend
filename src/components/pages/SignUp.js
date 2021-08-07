import { Link } from "react-router-dom";
import peopleIcon from '../images/peopleIcon.png'
import passwordIocn from '../images/passwordIcon.png'
import emailIcon from '../images/emailIcon.png'
import axios from '../connection/axios'
const Signup = () => {
    const signup = async (e) => {
        e.preventDefault()
        const p1 = document.getElementById("password1").value
        const p2 = document.getElementById("password2").value
        if (p1 !== p2) {
            alert("Password does not match")
            document.getElementById("password1").focus()
        }
        else {
            const data = {
                name: document.getElementById("signup-name").value,
                email: document.getElementById('signup-email').value,
                password: document.getElementById("password1").value,
            }
            const res = await axios.post('/signup', data);
            if (res.status === 201) {
                alert(res.data.message)
                document.getElementById("signupForm").reset()
            }
            alert(res.data.message)
        }
    }
    return (
        <div id="signupContainer" className="container">
            <div className="title">
                <h2>Admin Signup</h2>
            </div>
            <form id="signupForm" onSubmit={signup}>
                <i className="credential-wrapper">
                    <img src={peopleIcon} alt="" width="20" />
                    <input id="signup-name" required className="Credentials" type="text" placeholder="Name" />
                </i>
                <i className="credential-wrapper">
                    <img src={emailIcon} alt="" width="20" />
                    <input id="signup-email" required className="Credentials" type="text" placeholder="Email" />
                </i>
                <i className="credential-wrapper">
                    <img src={passwordIocn} alt="" width="20" />
                    <input id="password1" required className="Credentials" type="password" placeholder="Password" />
                </i>
                <i className="credential-wrapper">
                    <img src={passwordIocn} alt="" width="20" />
                    <input id="password2" required className="Credentials" type="password" placeholder="Confirm Password" />
                </i>
                <button type="submit">Sign up</button>
            </form>
            <p >Already have an account?</p><Link className="links signUp-loginLink" to="/login">Login Now</Link>
        </div>
    );
}
export default Signup