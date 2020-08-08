import React, { Component } from "react";
import PlayLists from "../components/PlayLists";
import { createPlaylist } from "../redux/actions/playListActions";
import { connect } from "react-redux";

class PlayListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      privacystatus: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, privacystatus } = this.state;

    this.props.createPlaylist(title, description, privacystatus);
  };

  render() {
    return (
      <>
        <PlayLists />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Enter your Playlist title"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.description}
            placeholder="Enter your Playlist description"
          />
          <select
            name="privacystatus"
            onChange={this.handleChange}
            value={this.state.privacystatus}
          >
            <option value="" disabled>
              Select Privacy status
            </option>

            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default connect(null, { createPlaylist: createPlaylist })(PlayListPage);
