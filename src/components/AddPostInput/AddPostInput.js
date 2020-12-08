import React, { useState } from 'react';
import './AddPostInput.css'

const AddPostInput = ({onPost}) => {

    const [state, setState] = useState({
        titleContent: "",
        descContent: ""
    })

    const handleInput = (e) => setState({ ...state, [e.target.name]: e.target.value})

    const handleOnPost = () => {
        onPost({
            title: state.titleContent,
            content: state.descContent
        })

        setState({
            titleContent: "",
            descContent: ""
        })
    }

    return ( 
        <div className="AddPostInput">
            <h3>Add Post</h3>
            <hr />
            <p>Title</p>
            <input  placeholer="Title" value={state.titleContent} name="titleContent" onChange={handleInput} className="form-control" />
            <br />
            <p>Content</p>
            <textarea className="form-control" name="descContent" value={state.descContent} onChange={handleInput} />
            <button className="btn btn-primary" onClick={handleOnPost}>Post</button>
        </div>
     );
}
 
export default AddPostInput;