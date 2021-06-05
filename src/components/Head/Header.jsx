import React from 'react'
import { Link } from 'react-router-dom';
export default function Header({ auth, logout }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Messenger</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">

                    {
                        auth ?
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/groups">
                                        Groups

                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/logout" onClick={() => logout()}>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                            :
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item" >
                                    <Link className="nav-link active" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/register">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </nav>
    )
}
