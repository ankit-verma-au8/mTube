import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handlesearchclick = () => {
    this.props.history.push(`/search/${this.state.query}`);
  };

  render() {
    return (
      <form
        className="input-group mb-3"
        style={{ width: "40%", margin: "15px auto" }}
      >
        <input
          value={this.state.query}
          onChange={this.handleChange}
          type="text"
          className="form-control"
          placeholder="Search youtube..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            style={{ background: "#0056B3", color: "white" }}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.handlesearchclick}
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(Search);
