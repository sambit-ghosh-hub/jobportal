import React from 'react'
import './Searchcontainer.css'

function Searchcontainer() {
    return (
        <div className='searchcontainer'>
            <input type="text" placeholder='Title, Client, Location....' />
            <button> Search </button>
        </div>


    )
}

export default Searchcontainer