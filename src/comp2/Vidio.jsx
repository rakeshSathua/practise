import React from 'react'

function Vidio({onClick}) {
    function handleClick(){
        onClick();
    }
    return (
    <>
        <button onClick={handleClick}> Play </button>
    </>
  )
}

export default Vidio