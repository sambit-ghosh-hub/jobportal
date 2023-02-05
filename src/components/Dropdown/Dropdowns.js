import React from 'react'
import Dropdowncard from './Dropdowncard'
import './Dropdowns.css'


function Dropdowns() {

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
    const domain = [
        {
            value: 0,
            label: "Industry"
        },
        {
            value: 1,
            label: "IT"
        },
            {
            value: 2,
            label: "HR"
        },
                {
            value: 3,
            label: "PM"
        },
        {
            value: 4,
            label: "Insurance"
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

    
    return (
        <div className='dropdown-frame'>
            <Dropdowncard optionsmap={location}/>
            <Dropdowncard optionsmap={domain}/>
            <Dropdowncard optionsmap={jobtype}/>
        </div>
    )
}
export default Dropdowns