import React from 'react'

let Alert = (props) => {
    const refresh = () =>{
        window.location.reload(true);
    }
    return(
        <>
         <div className="alert">
        <div className='text'>{props.text}</div>
        <div className='text1'>Thanks for your message!</div>
        <div className='text1'>Will back to you ASAP</div>
        <button className='alertbtn' onClick={refresh}>Close</button>
        </div>
        </>
    )
}

export default Alert