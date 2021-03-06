import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Aditya Yadav</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </div>
                    </label>
                    <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">Projects</button>
                                <button className="btn btn-primary btn-block">Blog</button>
                                <button className="btn btn-primary btn-block">About</button>
                                <button className="btn btn-primary btn-block">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar