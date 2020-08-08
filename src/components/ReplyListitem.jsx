import React from "react";

const ReplyListitem = ({ replyComment }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        marginBottom: "5px",
        padding: "5px 0",
      }}
    >
      <img
        style={{
          borderRadius: "50%",
          marginRight: "15px",
          width: "30px",
          height: "30px",
        }}
        src={replyComment.snippet.authorProfileImageUrl}
      />
      <span>{replyComment.snippet.textOriginal}</span>
    </div>
  );
};

export default ReplyListitem;
