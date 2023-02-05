import React from 'react'
import Dropdowncard from './Dropdowncard'
import './Dropdowncont.css'

function Dropdowncont() {

    const location = [
        {
            value: 0,
            label: "Location"
        },
        {
            value: 1,
            label: "Bengaluru"
        },
            {
            value: 2,
            label: "Mangalore"
        },
                {
            value: 3,
            label: "Pune"
        },
        {
            value: 4,
            label: "Hyderabad"
        }

    ]
   
    const jobtype =[
        {
            value:0,
            label:"Job Type"
        },
        {
            value:1,
            label:"Full Time"
        },
        {
            value:2,
            label:"Hybrid mode"
        },
        {
            value:3,
            label:"Part time"
        }
    ]
    const alljobsselect = [

        {
            value:0,
            label:"All Jobs"
        }
    ]
    const industry = [

        {
            value:0,
            label:"Industry"
        }
    ]
    const posteddate = [

        {
            value:0,
            label:"Posted Date"
        }
    ]
    
    return (
        <div className='dropdowncont-frame'>
            <Dropdowncard optionsmap={alljobsselect}/>
            <Dropdowncard optionsmap={industry}/>
            <Dropdowncard optionsmap={location}/>
            <Dropdowncard optionsmap={jobtype}/>
            <Dropdowncard optionsmap={posteddate}/>
        </div>
    )
}
export default Dropdowncont;