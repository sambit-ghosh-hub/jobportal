import React from 'react'
import './Backtosearch.css'
import { Link, useNavigate } from 'react-router-dom'



function Backtosearch(props) {

const navigate = useNavigate('');
// function handleback(){
//   navigate("/alljobs");
// }
  return (

    
    <div>
         <div className='bs-title-frame'>
                    <label className="label-frame">{props.name}</label>
                    <Link to="/alljobs">
                    <div className='backimage'>                      
                        <img alt='backimage' src="backarrow.svg"/>
                        <span className="backtosearch-frame">Back to search results</span>
                        
                    </div>
                    </Link>
                </div>
    </div>
  )
}

export default Backtosearch