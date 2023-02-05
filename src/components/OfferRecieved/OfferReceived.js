import React, { useState, useEffect,useContext } from 'react'
import Axios from 'axios'
import Searchcontainer from '../Searchcontainer/Searchcontainer'
import Dropdowncont from '../Dropdown/Dropdowncont'
import Backtosearch from '../Backtosearch/Backtosearch'
import JobPostingCard from '../JobPostingCard/JobPostingCard'
import './Offerreceived.css'
import Header from '../Header/Header'
import DataContext from '../../context/DataContext'
function OfferReceived() {
  const jobpostheading =  {
    jobcode: "JOB CODE",
    jobtitle: "JOB TITLE",
    location: "LOCATION",
    posteddate: "POSTED DATE",
    applieddate: "APPLIED DATE",
    candidateapplicationstatus: "STATUS"
}
let ctx = useContext(DataContext)
    console.log(ctx.userProfile)

let userid =
{ "userid": 1,
"candidateapplicationstatus":"Offer Received" }

let [jobstatuscount, setJobStatusCount] = useState([]);
useEffect(() => {
    const fetchJobCount = async () => {
        let res = await Axios.post("/jobsbystatus", userid);
        setJobStatusCount(res.data)
    }

    fetchJobCount()

}, [])

console.log(jobstatuscount)

return (
  <>
  <Header/>
<div className='offerreceived-container'>
  <Backtosearch name="Offer Received"/>
    <Searchcontainer/>
    <Dropdowncont/>
    <div className='jobs-frame'>
      <JobPostingCard jobdet={jobpostheading}/>
    {jobstatuscount.map((ele)=> 
    <JobPostingCard jobdet={ele}/>        
    )}
    </div>

</div>
</>
)
}

export default OfferReceived