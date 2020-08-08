import React from 'react'
import CommentListitem from './Commentlisitem'

const Comments = ({comments}) => {
    return (
        <div>
            
           {comments.map((comment)=>{return <CommentListitem comment={comment}/>})}

            
        </div>
    )
}

export default Comments
