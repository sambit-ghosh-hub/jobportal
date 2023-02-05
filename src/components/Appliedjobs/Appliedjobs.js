import React, { useState,useEffect } from 'react'
import Axios  from 'axios';
import Dropdowncont from '../Dropdown/Dropdowncont'
import JobCard from '../JobCard/JobCard'
import { useLocation } from "react-router-dom";
import Search from '../Searchcontainer/Searchcontainer'
import Searchcontainer from '../Searchcontainer/Searchcontainer'
import Header from '../Header/Header';
import './Appliedjobs.css'
 


function Appliedjobs() {
    const location = useLocation();
    const appliedjobdata=location.state;



    return (
        <> <Header/>
            <div className='appliedjob-container' >
                {/* <Backtosearch/> */}
                <div className='atitle-frame'>
                    <label className='label-frame'>Applied Jobs</label>
                    <div className='backimage'>
                        <img alt='backimage' src="backarrow.svg" />
                        <span>Back to search results</span>
                    </div>
                </div>

                <Searchcontainer />
                <Dropdowncont />
                
    {appliedjobdata.map((ele,idx)=>
        <JobCard jobdesc={ele} />
        // setAppliedjobCnt={setAppliedjobCnt} />
        )}
    
             

             
            </div>

        </>
    )
}

export default Appliedjobs