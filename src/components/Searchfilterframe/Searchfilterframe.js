import React from 'react'
import './Searchfilterframe.css'
import Searchcontainer  from '../Searchcontainer/Searchcontainer'
import Dropdowncont from '../Dropdown/Dropdowncont'

function Searchfilterframe({props}) {
  return (
    <div className='searchfilter-container' >
      <div className='sftitle-frame'>
        <label>{props.title}</label>
        <div className='sf-backimage'>
          <img alt='backimage' src="backarrow.svg" />
          <span>Back to search results</span>
        </div>
      </div>
      <Searchcontainer />
      <Dropdowncont />
    </div>
  )
}

export default Searchfilterframe