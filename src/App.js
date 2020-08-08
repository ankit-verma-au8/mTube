import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Homepage from "./Pages/HomePage";
import Login from "./Pages/LoginPage";
import { Switch, Route, Redirect } from "react-router-dom";
import VideoDetail from "./Pages/VideoDetail";
import Search from "./components/Search";
import SerachresultsPage from "./Pages/SearcresultsPage";
import PlayListpage from "./Pages/PlayListPage";
import ProfilePage from "./Pages/ProfilePage";
import MychannelPage from "./Pages/Mychannel";
import SubscrionsPage from "./Pages/SubscriptionsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/video/:videoId" component={VideoDetail} />
        <Route
          exact
          path="/search/:searchquery"
          component={SerachresultsPage}
        />
        <Route exact path="/playlists" component={PlayListpage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/channel" component={MychannelPage} />
        <Route exact path="/subscriptions" component={SubscrionsPage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
