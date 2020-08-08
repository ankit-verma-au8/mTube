import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { connect } from "react-redux";
import { fetchchannelData } from "../redux/actions/myChannelActions";

class Mychannel extends Component {
  componentDidMount() {
    this.props.fetchchannelData();
  }

  render() {
    const { channelData } = this.props;
    console.log(channelData);
    return channelData ? (
      <Jumbotron>
        <img
          src={channelData.items[0].snippet.thumbnails.medium.url}
          alt="channel logo"
          style={{ borderRadius: "50%" }}
        />
        <h1 className="display-5">
          Hello, {channelData.items[0].snippet.title}
        </h1>
        <p className="lead">
          {channelData.items[0].snippet.localized.description}
        </p>
        <p>Videos: {channelData.items[0].statistics.videoCount}</p>
        <p>Toatal Views: {channelData.items[0].statistics.viewCount}</p>
        <p>Subscribers: {channelData.items[0].statistics.subscriberCount}</p>
        <p>Total Comments: {channelData.items[0].statistics.commentCount}</p>
      </Jumbotron>
    ) : (
      <h1>Loading channel...</h1>
    );
  }
}

const mapStatetoProps = (storeData) => {
  return {
    channelData: storeData.channelState.channelData,
  };
};

export default connect(mapStatetoProps, { fetchchannelData: fetchchannelData })(
  Mychannel
);
