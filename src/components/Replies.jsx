import { Collapse, Button, CardBody, Card } from "reactstrap";
import React, { useState } from "react";
import ReplyListitem from "./ReplyListitem";

const Replies = ({ replies }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        {isOpen ? "Hide Replies" : "Show Replies"}
      </Button>
      <Collapse isOpen={isOpen}>
        {replies.map((reply) => {
          return <ReplyListitem key={reply.id} replyComment={reply} />;
        })}
      </Collapse>
    </div>
  );
};

export default Replies;
