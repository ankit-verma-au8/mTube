import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchVideos } from "../redux/actions/videoActions";
import Videos from "../components/Videos";
// const HomePage = ({ user }) => {

//     return !user ? <Redirect to="/login" /> : <div>Home Page</div>

// }

export class SearchresultsPage extends Component {
  componentDidMount() {
    this.props.fetchSearchVideos(this.props.match.params.searchquery);
  }

  componentDidUpdate(prevProps) {
    const prevSearchQuery = prevProps.match.params.searchquery;
    const newSearchquery = this.props.match.params.searchquery;
    if (prevSearchQuery === newSearchquery) {
      console.log("do not update");
    } else {
      this.props.fetchSearchVideos(newSearchquery);
    }
  }

  render() {
    console.log(this.props);
    return this.props.videosData ? (
      <Videos mode="search" />
    ) : (
      <h1>Loading results..</h1>
    );
  }
}

const mapStateToprops = (storeData) => {
  return {
    videosData: storeData.videoState.videos,
  };
};

export default connect(mapStateToprops, {
  fetchSearchVideos: fetchSearchVideos,
})(SearchresultsPage);
