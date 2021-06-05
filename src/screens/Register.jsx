import React, { useState } from 'react'

export default function Register({ register }) {
    const [passError, setPassError] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirm_password: "",
        phone: "0694823664",
        fname: "",
        lname: ""
    })
    const submit = () => {
        console.log(user);
        if (user.password === user.confirm_password)
            if (user.email && user.fname && user.lname && user.phone)
                register({
                    email: user.email,
                    password: user.password,
                    phone: user.phone,
                    name: `${user.lname} ${user.fname}`,
                })
            else setPassError(true);

    }
    const onChange = (key, value) => {
        setPassError(false);
        setUser({
            ...user,
            [key]: value
        })
    }
    return (
        <div className="register__container">
            <div className="form-group">
                <label className="form-label mt-4">Full name</label>
                <div className="form-floating mb-3">
                    <input type="name" className="form-control" id="fname" placeholder="Achraf" value={user.fname} onChange={(e) => onChange(e.target.id, e.target.value)} />
                    <label htmlFor="fname">First Name</label>
                </div>
                <div className="form-floating">
                    <input type="name" className="form-control" id="lname" placeholder="Bilal" value={user.lname} onChange={(e) => onChange(e.target.id, e.target.value)} />
                    <label htmlFor="lname">Last Name</label>
                </div>
            </div>
            <div className="form-group">
                <label className="form-label mt-4">Contact</label>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="achraf.mail@gmail.com" value={user.email} onChange={(e) => onChange(e.target.id, e.target.value)} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating">
                    <input type="tel" className="form-control" id="phone" placeholder="0661000000" value={user.phone} pattern="0[56][0-9]{8}" onChange={(e) => onChange(e.target.id, e.target.value)} />
                    <label htmlFor="phone">06XXXXXXXX</label>
                </div>
            </div>
            <div className={`form-group`} >
                <label className="form-label mt-4 ">Password</label>
                <div className="form-floating mb-3">
                    <input type="password" className={`${passError ? 'bg-danger' : ''} form-control`} id="password" placeholder="Password" value={user.password} onChange={(e) => onChange(e.target.id, e.target.value)} />
                    <label htmlFor="password" >Password </label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="confirm_password" placeholder="Password" value={user.confirm_password} onChange={(e) => onChange(e.target.id, e.target.value)} />
                    <label htmlFor="confirm_password">Password Confirmation</label>
                </div>
            </div>
            <button className="btn btn-primary" onClick={submit}>Register</button>
        </div >
    )
}
