import {Link} from "react-router-dom"
export default function Navbar() {
    return (
        <nav>
            <img src="../../public/images/CinemaC4.png" className="nav--icon"/> 
            <div className="nav--actions">
                <Link className = "nav--actions" to = "/login"><h4>Login</h4></Link>
                <Link className = "nav--actions" to = "/signup"><h4>Sign up</h4></Link>
            </div>
        </nav>
    )
}