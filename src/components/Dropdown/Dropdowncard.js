import React from 'react'
import './Dropdowncard.css'
function Dropdowncard({optionsmap}) {
  return (
    <div className='option-outer-frame'>
    <div className='option-frame'>      
    <select className='optionSelect' value={optionsmap}> 
           {optionsmap.map((ele, i) => {
            return (
              <option  value={ele.value} key={i}>
                {ele.label}
              </option>
            );
          })}
        </select>
    </div>
    </div> 
  )
}
/* onChange={(genreselect) => setGenre(genreselect.target.value)}> */


export default Dropdowncard
