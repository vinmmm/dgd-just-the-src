import React, { PropTypes } from 'react';
import Comment from './Comment'


const CommentList = ({ comments=[], onRemove=f=>f }) =>
    <div className="comment-list">
        {(comments.length === 0) ?
            <p>Add a Suggested Resource</p> :
            comments.map(comment =>
                <Comment key={comment.id}
                       {...comment}
                       onRemove={() => onRemove(comment.id)} />
            )
        }
    </div>

CommentList.propTypes = {
    comments: PropTypes.array,
    onRemove: PropTypes.func
}

export default CommentList