import React, { PropTypes, Component } from 'react';


const AddCommentForm = ({onNewComment=f=>f}) => {

    

    let _title, _comment

    const submit = e => {
        e.preventDefault()
        onNewComment(_title.value, _comment.value)
        _title.value = ''
        _comment.value = ''
        _title.focus()
        console.log(_title.value);
    }

    return (
        <div>
        <h1>Add Resources</h1>
        <form className="add-comment" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="resource title..." required/>
            <input ref={input => _comment = input}
                   type="text"
                   placeholder="resource comment..." required/>
            <div className="App">
           <button className="float-button">+</button>
           </div>
        </form>


        </div>
    )

}

AddCommentForm.propTypes = {
    onNewComment: PropTypes.func
}

export default AddCommentForm