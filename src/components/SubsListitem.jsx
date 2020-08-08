import React from "react";

const SubsListitem = (props) => {
  console.log(props.subscriptions.snippet.title);
  return <li>{props.subscriptions.snippet.title}</li>;
};

export default SubsListitem;
