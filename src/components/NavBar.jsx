import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import keys from "../config";
import { connect } from "react-redux";
import { logOutUser } from "../redux/actions/userActions";

const MtubeNavBar = (props) => {
  const handleLogoutFailure = (err) => {
    console.error(err);
  };
  const handleLogoutSuccess = (res) => {
    alert("Loggedout sucessfully");
    props.logOutUser();
  };

  return (
    <Navbar color="light" light expand="md">
      <Link to="/">YouTube</Link>
      <Nav className="ml-auto">
        {!props.user ? (
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
        ) : (
          <>
            <NavItem
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "15px",
                fontSize: "20px",
              }}
            >
              <NavLink to="/playlists">Playlists</NavLink>
            </NavItem>
            <NavItem
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "15px",
                fontSize: "20px",
              }}
            >
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>

            <GoogleLogout
              clientId={keys.CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={handleLogoutSuccess}
              onFailure={handleLogoutFailure}
            ></GoogleLogout>
          </>
        )}
      </Nav>
    </Navbar>
  );
};
const mapStateToProps = (storedata) => {
  return {
    user: storedata.userState.user,
  };
};

export default connect(mapStateToProps, { logOutUser: logOutUser })(
  MtubeNavBar
);
