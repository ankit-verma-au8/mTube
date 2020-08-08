import React from "react";
import keys from "../config";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { setUser } from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";

const LoginPage = ({ user, setUser }) => {
  const responseGoogle = (response) => {
    if (response.error) {
      console.log(response.error);
    } else {
      setUser({ ...response.profileObj, ...response.tokenObj });
    }
  };
  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <GoogleLogin
      clientId={keys.CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      scope="https://www.googleapis.com/auth/youtube"
    />
  );
};

const mapStateToProps = (storedata) => {
  return {
    user: storedata.userState.user,
  };
};

export default connect(mapStateToProps, { setUser: setUser })(LoginPage);
