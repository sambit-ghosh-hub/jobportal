import React, { useState } from 'react'
import './LoginHeader.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import DataContext from '../../context/DataContext';

function LoginHeader() {

    let profileimage = useContext(DataContext)
    const imgsrc = profileimage.userProfile.profilepic
    console.log(imgsrc)
    const [logout, setLogout] = useState("notdisplayed");

    const showButton = e => {
      e.preventDefault();
      setLogout("displayed");
    };
  
    const hideButton = e => {
      e.preventDefault();
      setLogout("notdisplayed");
    };

    return (
        <div className='header-frame'>
            <div className='inner-header-frame'>
            <div className='header-section1'>
                <Link to="/alljobs" >
                    <img src="./images/HVLogo.png" alt="logo" />
                </Link>
            </div>

            
            </div>
            <div style={{width:'10%', backgroundColor:'pink'}}></div>
        </div>
    )

}

export default LoginHeader;