import React from "react";
import Replies from "./Replies";

const Commentlisitem = ({ comment }) => {
  console.log(comment);

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "5px 30px",
        padding: "10px 0",
      }}
    >
      <img
        style={{
          borderRadius: "50%",
          marginRight: "10px",
          width: "30px",
          height: "30px",
        }}
        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt="profile image"
      />

      <span>
        <span style={{ fontWeight: "600" }}>Comment:</span>{" "}
        {comment.snippet.topLevelComment.snippet.textOriginal}
      </span>

      {comment.replies ? <Replies replies={comment.replies.comments} /> : <></>}
    </div>
  );
};

export default Commentlisitem;
