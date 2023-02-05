import Axios from 'axios'
import React, { useState } from 'react'
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../Header/LoginHeader';


function Signup() {
    let [signdata, setSignData] = useState({});
    let [msg, setMsg] = useState('');
    const navigate = useNavigate();
    let [data,setData]=useState({});

    const handleChange = (e) => {

        setSignData({
            ...signdata,
            [e.target.name]: e.target.value
        })
        console.log(signdata)
    }

      async function sendData(){
        let res=await Axios.post("/login",data)
        setMsg(res.data.message)
        console.log(res.data.message)
        if (res.data){
            navigate('/alljobs')
        }

      }
    return (
        <>
        <LoginHeader/>
        <div className='signupframe'>
            <div classname='image-container'>
                <img src='/images/login.png' />
            </div>
            {/* style={bgStyle}> */}
            <div className="signup-container">
                <div className="signup-form">
                    <h1 className="title">Login to Career Gateway</h1>
                    <form>
                        <div className="signup-form-group">
                            <input type="email" required name="email" onChange={handleChange} />
                            <label>Email Address</label>
                        </div>
                        <div className="signup-form-group">
                            <input type="password" required name="password" onChange={handleChange} />
                            <label>Password</label>
                        </div>

                        <input type="button" value="Register" className="signup-submit-btn" onClick={setSignData} />


                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup