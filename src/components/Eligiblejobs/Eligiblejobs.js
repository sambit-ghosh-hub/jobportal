import React from 'react'
import Dropdowncont from '../Dropdown/Dropdowncont'
import JobCard from '../JobCard/JobCard'
import { useLocation } from "react-router-dom";
import Search from '../Searchcontainer/Searchcontainer'
import Searchcontainer from '../Searchcontainer/Searchcontainer'
import Header from '../Header/Header';
import './Eligiblejobs.css'
 


function Eligiblejobs() {
    const location = useLocation();
    const eligiblejobdata=location.state;
    return (
        <> <Header/>
            <div className='eligiblejob-container' >
                {/* <Backtosearch/> */}
                <div className='etitle-frame'>
                    <label className='label-frame'>Eligiblejobs</label>
                    <div className='backimage'>
                        <img alt='backimage' src="backarrow.svg" />
                        <span>Back to search results</span>
                    </div>
                </div>

                <Searchcontainer />
                <Dropdowncont />
                
                {[...eligiblejobdata].map((key, value) => (
                    <JobCard jobdesc={key}></JobCard>

                ) )}

             
            </div>

        </>
    )
}

export default Eligiblejobs