import React from 'react'
import './JobCard.css'
import { useState } from 'react';
function JobCard({ jobdesc }) {

    // const appliedcnt = 
    let isapplied=true;
    const [isDisabled, setDisabled] = useState(false);
    
    function updateApplied(){
        // appliedCnt(1)
        setDisabled(true);
    }
    
    return (
        <div className='jobcard-frame'>

            <div className="jobcard-container">
                {/* <div className="titlecontainer"> */}
                <div className="jobtitle-container">
                <span>{jobdesc.jobcode}-{jobdesc.jobtitle}</span>
                {isapplied ? 
                    <button className={isDisabled? 'hidden' : 'button'} type="button" onClick={updateApplied}>
                        <label>Apply</label>
                        {/* Apply */}
                    </button> 
                    : <label>Applied</label> }
                </div>
                    <span className={isDisabled? 'appliedlabel' : 'hidden'}>Applied</span>

                <div className="jobdetail-container">

                    <div className='jobtype'>                 
                        <img src='./images/location.png' alt="location" />                        
                        <label>{jobdesc.location}</label>
                    </div>
                    <div className='jobtype'>
                        <img src='./images/jobtype.png' alt="jobtype" />
                        <label>{jobdesc.jobtype}</label>

                    </div>
                    <div className='jobtype'>
                        <img src='./images/salary.png' alt="salary" />
                        <label>{jobdesc.salary}</label>

                    </div>
                    <div className='jobtype'>

                        <img src='./images/company.png' alt="company" />
                        <label>{jobdesc.companyname}</label>

                    </div>
                </div>
                <div className="jobdesc">
                    {jobdesc.jobdescription}                    
            </div>
        </div>
        </div>
    )
}

export default JobCard