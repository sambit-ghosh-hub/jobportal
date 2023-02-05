import React from 'react'
import LoginHeader from '../Header/LoginHeader'
import './Logout.css'
import {Link} from 'react-router-dom'

function Logout() {

    return (
        <>
            <LoginHeader />
            <div className='logoutframe'>
                <div classname='logoutimage-container'>
                    <img src='/images/login.png' />
                </div>
                <div className="logout-container">
                    Loggeded out successfully!!!

                    <div>
                        <Link to="/">
                        <button>
                            Return to Login
                        </button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Logout;