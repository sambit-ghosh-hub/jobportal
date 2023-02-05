import React from 'react'
import Snapshotcard from '../Snapshotcard/Snapshotcard'
import './ApplicationDisplay.css'

function ApplicationDisplay(props) {

    console.log(props.jobcount)

    const applicationmap=[{
        candidateapplicationstatus:"Shortlisted",
            count:38
    },
    {
        candidateapplicationstatus:"Interviewing",
        count:21
    },
    {
        candidateapplicationstatus:"Rejected",
    count:10
    },
    {
        candidateapplicationstatus:"OfferReceived",
    count:10
    }


]
  return (
    <div className='myappl-frame'> 
    <div style={{height:'15%',marginLeft:'7%'}}> My Applications</div>
        <div className='myappl-innerframe'>
            {props.jobcount.map((ele)=>
                <Snapshotcard card={ele}/>
            )}

        </div>
    </div>


  )
}

export default ApplicationDisplay