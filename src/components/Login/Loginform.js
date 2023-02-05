import Axios from 'axios'
import React,{useState,useEffect,useContext} from 'react'
// import backgroundimage from './canyon.jpg';
import './Loginform.css';
import { useNavigate,Link } from 'react-router-dom';
import LoginHeader from '../Header/LoginHeader';
import DataContext from '../../context/DataContext';
// const bgStyle = {
//     // backgroundImage: `url(${backgroundimage})`,
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     width: "100%",
//     height: "100%",
//  };
 
function Loginform() {
  let [data,setData]=useState({});
  let [msg,setMsg]=useState('');
  const navigate = useNavigate();
  let email=data.email;
  let emailinput={"email":email};
  let [profile,setProfile]=useState([]);
  
  let ctx = useContext(DataContext);

  useEffect(() => {
      const fetchData = async () => {
          let res = await Axios.post("/profilebyemail",emailinput);
          console.log(res.data);
          setProfile(res.data)
          ctx.setUserProfile(res.data)  
        }
      

  console.log(profile);
  ctx.setUserProfile(profile);
  console.log(ctx.userProfile);

  }, [])


  const handleChange = (e) => {
    
      setData({
        ...data,
        [e.target.name] : e.target.value
      })
      console.log(data)
  }

  async function sendData(){
    let res=await Axios.post("/login",data)
    setMsg(res.data.message)
    console.log(res.data.message)
    

    let res1 = await Axios.post("/profilebyemail",emailinput);
    console.log(res1.data);
    setProfile(res1.data)
    ctx.setUserProfile(res1.data)  

    if (res.data){
        navigate('/alljobs')
    }

  }
  return (
    <>
    <LoginHeader/>
     <div className='loginframe'>
      <div classname='image-container'>
        <img src='/images/login.png' />
      </div>
      {/* style={bgStyle}> */}
    <div className="login-container">
    <div className="login-form">
      <h1 className="title">Login to Career Gateway</h1>
      <form>
        <div className="login-form-group">
        <input type="email"  required name="email" onChange={handleChange}/>
          <label>Email Address</label>
        </div>
        <div className="login-form-group">
          <input type="password" required name="password" onChange={handleChange}/>
          <label>Password</label>
        </div>

        <input type="button" value="Sign In" className="login-submit-btn" onClick={sendData}/> 

        <div className="login-register">
        <h4>{msg}</h4>
          <span>Yet to Register ? </span> <Link to='/signup'><span className='link'>Sign Up </span></Link>
        </div>
      </form>
    </div>
  </div>
 </div>
 </>
  )
}

export default Loginform