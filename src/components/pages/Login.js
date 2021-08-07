import { Link } from "react-router-dom";
import '../CSS/login.css'
import peopleIcon from '../images/peopleIcon.png'
import passwordIocn from '../images/passwordIcon.png'
import axios from '../connection/axios'
const Login = () => {
    //to make admin logout oneces page refreshed
    window.addEventListener('beforeunload', (e) => {
        e.preventDefault();
        window.localStorage.setItem("admin", "loggedOut");
    })
    //to make admin logout oneces page closed
    window.onunload = (e) => {
        e.preventDefault();
        window.localStorage.setItem("admin", "loggedOut");
    }

    const login = async (e) => {
        e.preventDefault()
        const data = {
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value
        }
        const res = await axios.post('/login', data);

        if (res.status === 201) {
            window.localStorage.setItem("admin", "loggedIn");
            document.getElementById("loginForm").reset()
            document.getElementById("navbar-loginLink").innerHTML = "Logout"
            document.getElementById("navbar-loginLink").setAttribute("to", "/logout")
            document.getElementById("navbar-homeLink").click()

        }
        alert(res.data.message)
    }
    return (
        <div id="loginContainer" className="container">
            <div className="title">
                <h2>Admin Login</h2>
            </div>
            <form id="loginForm" onSubmit={login}>
                <i className="credential-wrapper">
                    <img src={peopleIcon} alt="" width="20" />
                    <input id="login-email" required className="Credentials" type="text" placeholder="Email" />
                </i>
                <i className="credential-wrapper">
                    <img src={passwordIocn} alt="" width="20" />
                    <input id="login-password" required className="Credentials" type="password" placeholder="Password" />
                </i>
                <button type="submit">Login</button>
            </form>
            <p className="signUP-P">Don't have account?</p><Link className="links signUp-loginLink" to="/signup">Signup Now</Link>
        </div>
    );
}
export default Login