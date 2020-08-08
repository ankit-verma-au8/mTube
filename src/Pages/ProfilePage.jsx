import React from "react";
import { connect } from "react-redux";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

const ProfilePage = (props) => {
  console.log(props);
  return (
    <Jumbotron>
      <img
        style={{ borderRadius: "50%" }}
        src={props.userData.imageUrl}
        alt="user picture"
      />
      <h1 className="display-6">{props.userData.name}</h1>
      <p className="lead">Email: {props.userData.email}</p>
      <Link to="/channel">
        <Button style={{ marginRight: "10px" }} color="primary">
          My Channel
        </Button>
      </Link>

      <Link to="/subscriptions">
        <Button color="primary">Subscriptions</Button>
      </Link>
    </Jumbotron>
  );
};

const mapStatetoProps = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};

export default connect(mapStatetoProps)(ProfilePage);
