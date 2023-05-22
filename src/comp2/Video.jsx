import React from 'react'

function Video({title, id, deleteVideos, editVideo}) {
    
    return (
    <>
        <div>
            <button className="choose" onClick={() => deleteVideos(id)}>X</button>
            <button className="edit" onClick={() => editVideo(id)}> EDIT </button>
        </div>

        <img src="https://images.pexels.com/photos/15792501/pexels-photo-15792501.jpeg?auto=compress&cs=tinysrgb&w=200&lazy=load" alt="" />
        <div>Title is  {title} </div>
        <h1>------</h1>
        
    </>
    )
}

export default Video