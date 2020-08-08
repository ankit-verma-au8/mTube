import React, { useState } from "react";
import { Jumbotron, Collapse, Button, CardBody, Card } from "reactstrap";

const VideoPlayer = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  console.log(video);
  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Video"
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Jumbotron style={{ paddingTop: "40px" }}>
        <h1 className="display-8" style={{ fontSize: "25px" }}>
          {video.snippet.localized.title}
        </h1>
        <Button
          color="primary"
          onClick={toggle}
          style={{ marginBottom: "1rem" }}
        >
          Description
        </Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>{video.snippet.description}</CardBody>
          </Card>
        </Collapse>
        <p className="lead">Likes:{video.statistics.likeCount}</p>
        <p className="lead">Dislikes: {video.statistics.dislikeCount}</p>
        <p className="lead">Views:{video.statistics.viewCount}</p>
        <p className="lead">Comments: {video.statistics.commentCount}</p>
      </Jumbotron>
    </>
  );
};

export default VideoPlayer;
