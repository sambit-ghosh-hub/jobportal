import React, { useState, useEffect,useContext } from 'react'
import Axios from 'axios'
import ApplicationDisplay from '../Applications/ApplicationDisplay'
import Snapshotcard from '../Snapshotcard/Snapshotcard'
// import Axios from Axios;
import { useMemo } from 'react'
import './Alljobs.css'
import { Link } from 'react-router-dom'
import Searchcontainer from '../Searchcontainer/Searchcontainer'
import Dropdowncont from '../Dropdown/Dropdowncont'
import JobCard from '../JobCard/JobCard'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import DataContext from '../../context/DataContext'


function Alljobs() {

    const navigate = useNavigate('')
    const [isLoading, setLoading] = useState(true);
    let [jobstatuscount, setJobStatusCount] = useState([]);
    


    var filtereddata = new Array();

    let [jobdata, setJobData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let res = await Axios.get("/jobdetail");
            setJobData(res.data)
            // arryay of objects
        }

        fetchData()


    }, [])

    let ctx = useContext(DataContext)
    console.log(ctx.userProfile)
    let candidateskill = ctx.userProfile.skills;
    if(ctx.userProfile.skills){
    const myArray = candidateskill.split(",");

    myArray.forEach( (item) =>

        filtereddata.push(jobdata.filter((eligiblejob) => {
            const searchstring = `${eligiblejob.skillsrequired.toLowerCase()}`
            return searchstring.includes(item.toLowerCase())
                ;
        }

        ))
    );
    }

    var eligiblejobdata = new Set(filtereddata.flat())
    

    let userid =
        { "userid": ctx.userProfile.id }

    let [applieddata, setAppliedData] = useState([]);

    useEffect(() => {
        const fetchAppliedData = async () => {
            let res = await Axios.post("/getappliedjobs", userid);
            setAppliedData(res.data)

            // arryay of objects
        }
        fetchAppliedData()


    }, [])


    
    
    useEffect(() => {
        const fetchJobCount = async () => {
            let res = await Axios.post("/jobstatuscount", userid)
                setJobStatusCount(res.data)
                setLoading(false);          
        }

        fetchJobCount()
        console.log(jobstatuscount) 

    }, [])

 
    if (isLoading) {
        return <div className="App">Loading...</div>;
      }
 


    return (

        <> <Header />

            <div className='alljobs-container'>

                <div className='ssheader-frame'>
                    <div style={{ height: '15%', marginLeft: '2%' }}> Snapshot</div>

                    <div className='ssheader-cardframe'>

                        <Snapshotcard candidateapplicationstatus={"All Jobs"} count={jobdata.length} imgsrc={"images/allJobs.png"}/>

                        <Link to='/eligiblejobs' className="link" state={eligiblejobdata}>
                            {/* state={filtereddata} */}
                            <Snapshotcard candidateapplicationstatus={"Eligible Jobs"} count={eligiblejobdata.size} imgsrc={"images/eJobs.png"}/>
                        </Link>

                        <Link to='/appliedjobs' className="link" state={applieddata}>
                            <Snapshotcard candidateapplicationstatus={"Applied Jobs"} count={applieddata.length} imgsrc={"images/appliedJobs.png"}/>
                        </Link>


                    </div>
                </div>

                <div className='myapplications-frame'>
                    <div style={{ height: '15%', marginLeft: '2%' }}> My Applications</div>
                <div className='ssheader-cardframe'>
{ 
console.log(jobstatuscount)

}
                <Link to='/shortlisted' className="link">
                    <Snapshotcard candidateapplicationstatus={"Shortlisted"} count={!(jobstatuscount === 'undefined')?jobstatuscount[3].count:2} imgsrc={"/images/shortlisted.png"} />
                    </Link>
                    <Link to='/interviewing' className="link" state={eligiblejobdata}>
                        <Snapshotcard candidateapplicationstatus={"Interviewing"} count={!(jobstatuscount === 'undefined')?jobstatuscount[1].count:2} imgsrc={"/images/interview.png"}/>
                    </Link>

                    <Link to='/rejected' className="link" state={applieddata}>
                        <Snapshotcard candidateapplicationstatus={"Rejected"} count={!(jobstatuscount === 'undefined')?jobstatuscount[2].count:2} imgsrc={"images/rejected.png"}/>
                    </Link>

                    <Link to='/offererceived' className="link" state={applieddata}>
                        <Snapshotcard candidateapplicationstatus={"Offer Received"} count={!(jobstatuscount === 'undefined')?jobstatuscount[0].count:2} imgsrc={"/images/offer.png"} />
                    </Link>


                </div>
                </div>



                <div className='search-frame'>

                </div>
                <label style={{fontsize:'medium', marginBottom:'1%'}}>All Jobs</label>
               
                <Searchcontainer />
                <Dropdowncont />
                <div className='jobcontainer-frame'>

                    {jobdata.map((ele, idx) =>



                        <JobCard jobdesc={ele} />
                        // setAppliedjobCnt={setAppliedjobCnt} />
                    )}
                </div>
                {/* <JobContainer appliedjobCnt={setAppliedjobCnt}/> */}
                {/* <JobCard jobdesc={jobdesc}/> */}


            </div>
         </>
    )
}

export default Alljobs