import React, { useState } from 'react'

import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import { IconButton } from '@material-ui/core';
export default function Login({ log }) {
    const [user, setuser] = useState({
        email: "aaaa",
        password: "aaaaaa"
    })
    const userChange = (key, value) => {

        setuser({
            ...user,
            [key]: value
        })
    }
    const login = () => {
        log(user);
    }
    return (
        <div className="login__container h-100">
            <form className="form d-flex h-100 justify-content-center align-items-center" onSubmit={(e) => {
                e.preventDefault()
                console.log(e)
            }}>
                <div className="form-group w-25">
                    <div className="form-floating mb-3 ">
                        <input type="email" className="form-control rounded" value={user.email} onChange={(e) => userChange('email', e.target.value)} id="email" placeholder="name@example.com" required />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control rounded" value={user.password} onChange={(e) => userChange('password', e.target.value)} id="password" placeholder="Password" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating d-flex justify-content-end">
                        <IconButton color="primary" aria-label="upload picture" className="mt-4 btn" component="span" onClick={() => login()}>
                            <VpnKeyRoundedIcon />
                        </IconButton>
                    </div>
                </div>

            </form>
        </div>
    )
}
