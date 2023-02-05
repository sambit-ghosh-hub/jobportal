import React from 'react'
import './JobPostingCard.css'
function JobPostingCard({jobdet}) {  

    var colorcode ="#323232";
    var jobcolorcode;
    var commoncode="#474646";

    if(!(jobdet.jobcode==="JOB CODE")){
        jobcolorcode ="#006FCB";
    }
    else{
        commoncode ="#323232";
        jobcolorcode='#323232'
    }
    const jobStyle = {
        color:jobcolorcode
    }
    const commonStyle ={
        color:commoncode
    }
  
    if((jobdet.candidateapplicationstatus==="Shortlisted")||(jobdet.candidateapplicationstatus==="Offer Received")||(jobdet.candidateapplicationstatus==="Rejected")||(jobdet.candidateapplicationstatus==="Interviewing")){
        commoncode='#474646'
    }
   
    if(jobdet.candidateapplicationstatus==="Shortlisted")
        colorcode='#FFB800'
    else if(jobdet.candidateapplicationstatus==="Offer Received")
        colorcode='#38A743'
    else if(jobdet.candidateapplicationstatus==="Rejected")
        colorcode="#FF0000"
    else if(jobdet.candidateapplicationstatus==="Interviewing")
        colorcode="#006FCB"

    const bgStyle = {
            color:colorcode
    }
    return (

        <div className='jobpostingcard-container'>
            <label style={jobStyle}>{jobdet.jobcode}</label>
            <label style={commonStyle}>{jobdet.jobtitle}</label>
            <label style={commonStyle}>{jobdet.location}</label>
            <label style={commonStyle}>{jobdet.posteddate}</label>
            <label style={commonStyle}>{jobdet.applieddate}</label>
            {/* {(jobdet.status === 'Shortlisted') ? */}
            <label style={bgStyle}>{jobdet.candidateapplicationstatus}</label>
            {/* :<label>{jobdet.status}</label>} */}
               
        </div>
    )
}

export default JobPostingCard