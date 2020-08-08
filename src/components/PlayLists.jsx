import React, { Component } from "react";
import { CardDeck, Button } from "reactstrap";
import PlayListitem from "./PlayListitem";
import { connect } from "react-redux";
import { fetchPlaylists } from "../redux/actions/playListActions";

class PlayLists extends Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    return (
      <>
        <CardDeck style={{ marginLeft: "0", marginRight: "0" }}>
          {this.props.playListData ? (
            this.props.playListData.items.map((element) => {
              return <PlayListitem key={element.id} playlist={element} />;
            })
          ) : (
            <h1>Loading</h1>
          )}
        </CardDeck>
      </>
    );
  }
}

const mapStateToprops = (storeData) => {
  return {
    playListData: storeData.playListState.playlists,
  };
};

export default connect(mapStateToprops, {
  fetchPlaylists: fetchPlaylists,
})(PlayLists);
