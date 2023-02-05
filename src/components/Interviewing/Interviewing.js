import React, { useState, useEffect,useContext } from 'react'
import Axios from 'axios'
import Searchcontainer from '../Searchcontainer/Searchcontainer'
import Dropdowncont from '../Dropdown/Dropdowncont'
import JobPostingCard from '../JobPostingCard/JobPostingCard'
import Backtosearch from '../Backtosearch/Backtosearch'
import Header from '../Header/Header'
import './Interviewing.css'
import DataContext from '../../context/DataContext'

function Interviewing() {
  const jobpostheading =  {
    jobcode: "JOB CODE",
    jobtitle: "JOB TITLE",
    location: "LOCATION",
    posteddate: "POSTED DATE",
    applieddate: "APPLIED DATE",
    candidateapplicationstatus: "STATUS"
}
const jbposting = [

{
    jobcode: "JPC-2",
    jobtitle: "Product Manager",
    location: "Bengaluru",
    posteddate: "08 Jan 2023",
    applieddate: "09 Jan 2023",
    status: "Interviewing"
}
]

let ctx = useContext(DataContext)
    console.log(ctx.userProfile)

let userid =
{ "userid": ctx.userProfile.id,
"candidateapplicationstatus":"Interviewing" }

let [jobstatuscount, setJobStatusCount] = useState([]);
useEffect(() => {
    const fetchJobCount = async () => {
        let res = await Axios.post("/jobsbystatus", userid);
        setJobStatusCount(res.data)
    }

    fetchJobCount()

}, [])

return (
  <>
  <Header/>
<div className='interviewing-container'>
  <Backtosearch name="Interviewing"/>
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

export default Interviewing