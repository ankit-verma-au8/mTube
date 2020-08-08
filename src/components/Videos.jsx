import React from "react";
import { CardDeck, Button } from "reactstrap";
import VideoListitem from "./VideoListitem";
import { connect } from "react-redux";
import { fetchTrendingVideos } from "../redux/actions/videoActions";

const Videos = ({ videosData, mode = "trending", fetchTrendingVideos }) => {
  const handleprevPage = () => {
    fetchTrendingVideos(videosData.prevPageToken);
  };

  const handlenextPage = () => {
    fetchTrendingVideos(videosData.nextPageToken);
  };

  return (
    <>
      <CardDeck style={{ marginLeft: "0", marginRight: "0" }}>
        {videosData ? (
          videosData.items.map((element) => {
            return mode === "trending" ? (
              <VideoListitem key={element.id} video={element} mode={mode} />
            ) : (
              <VideoListitem
                key={element.id.videoId}
                video={element}
                mode={mode}
              />
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </CardDeck>
      {videosData ? (
        videosData.prevPageToken ? (
          <Button
            onClick={handleprevPage}
            color="primary"
            style={{ marginBottom: "20px", marginRight: "15px" }}
          >
            Prev Page
          </Button>
        ) : null
      ) : null}

      {videosData ? (
        videosData.nextPageToken ? (
          <Button
            onClick={handlenextPage}
            color="primary"
            style={{ marginBottom: "20px" }}
          >
            Next Page
          </Button>
        ) : null
      ) : null}
    </>
  );
};

const mapStateToprops = (storeData) => {
  return {
    videosData: storeData.videoState.videos,
  };
};

export default connect(mapStateToprops, {
  fetchTrendingVideos: fetchTrendingVideos,
})(Videos);
