import React from 'react'
import './Snapshotcard.css'
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Snapshotcard(props) {
    
    return (
        <>
            <div className='snapshot-frame'>
                <div className='inner-frame'>
                    {/* <AssignmentIcon/> */}
                    <div className='logo-frame'>
                    <img src={props.imgsrc} alt='logo' />
                    </div>
                    <div className='jobdetails-frame'>
                        <div className='details'>
                            {props.candidateapplicationstatus}
                        </div>
                        <div className='count'>
                            {props.count}
                        </div>
                    </div>
                    <div className='arrow-frame'>
                        {/* <div className='arrow-frame-ellipse'>  */}
                            <img src='./snapshot/right-arrow.svg' alt='rightarrow' />
                            {/* <ChevronRightIcon/> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Snapshotcard;

