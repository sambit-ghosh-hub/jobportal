import React, { useState, useEffect,useContext } from 'react'
import Axios from 'axios'
import Backtosearch from '../Backtosearch/Backtosearch'
import Dropdowncont from '../Dropdown/Dropdowncont'
import JobPostingCard from '../JobPostingCard/JobPostingCard'
import Searchcontainer from '../Searchcontainer/Searchcontainer'
import Searchfilterframe from '../Searchfilterframe/Searchfilterframe'
import Header from '../Header/Header'
import './Shortlisted.css'
import DataContext from '../../context/DataContext'

function Shortlisted() {
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
  { "userid": ctx.userProfile.id,
  "candidateapplicationstatus":"Shortlisted" }

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
    <div className='shortlisted-container'>
      <Backtosearch name="Shortlisted"/>
        <Searchcontainer/>
        <Dropdowncont/>
        <div className='jobs-frame'>
          <JobPostingCard style={{color:'#323232'}} jobdet={jobpostheading}/>
        {jobstatuscount.map((ele)=> 
        <JobPostingCard jobdet={ele}/>        
        )}
        </div>

    </div>
    </>
  )
}

export default Shortlisted