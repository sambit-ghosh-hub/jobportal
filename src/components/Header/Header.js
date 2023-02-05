import React from 'react'
import './Header.css'
import { Link, useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react'
import DataContext from '../../context/DataContext';
import Axios from 'axios';

export default function MainHeader() {

    let profileimage = useContext(DataContext)
    const imgsrc = profileimage.userProfile.profilepic
    const [logout, setLogout] = useState("mhnotdisplayed");
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const showButton = e => {
        e.preventDefault();
        // setLogout("mhdisplayed");
        // setLogout("profiledropdown");

    };

    const hideButton = e => {
        e.preventDefault();
        setLogout("mhnotdisplayed");
    };

    async function handleLogout(){
        let res=await Axios.get("/logout")
        console.log(res.data)           
      }

    return (
        <div className='mainheader-frame'>
            <div className='mainheader-col1'>
                <div className='mainheader-section1'>
                    <Link to="/alljobs" >
                        <img className='main-logoimage' src="./images/HVLogo.png" alt="logo" />
                    </Link>
                </div>
                <div className='mainheader-section2'>

                    <div className='maindashboard-item'>
                        Dashboard
                    </div>
                    <div className='maindashboard-item'>
                        Application Profile
                    </div>
                    <div className='maindashboard-item'>
                        Applied Jobs
                    </div>
                    <div className='maindashboard-item'>
                        Activity
                    </div>
                    <div className='maindashboard-item'>
                        Job Agent
                    </div >
                </div>
                <div className='mainheader-section3' id='profileimage'>
                    <div className='mainheader-profile'>
                        {console.log(imgsrc)}
                        { (imgsrc) ? 
                        <img className='mhprofilepic' src={imgsrc}  alt='avatar' onClick={() => setOpen(!open)} />
                        :
                        <img className='mhprofilepic' src='avatar.svg' alt='avatar' onMouseDown={e => showButton(e)} onMouseLeave={e => hideButton(e)}/>
                    }
                    
                    {/* <div className={logout} >                        
                        <button>Logout</button>
                    </div> */}
                    <div className={ open? 'profiledropdown' :'mhnotdisplayed'}>
                            <ul>
                             <Link to="/profile"><li>Profile</li></Link>
                             <Link to="/logout" onClick={handleLogout}>  <li>Logout</li></Link>
                               
                            </ul>
                        </div>
                        <nav></nav>
                        </div>
                </div>
            </div>
        </div>
    )
}
