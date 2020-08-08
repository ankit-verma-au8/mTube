import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";

const limitDescription = (description, letterlimit) => {
  return description.length <= letterlimit
    ? description
    : `${description.slice(0, letterlimit)}...`;
};

const VideoListitem = ({ video, mode }) => {
  return (
    <Card style={{ flexBasis: "250px", marginBottom: "15px" }}>
      <Link
        to={
          mode === "trending"
            ? `/video/${video.id}`
            : `/video/${video.id.videoId}`
        }
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <CardImg
          top
          width="100%"
          src={video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <CardBody>
          <CardTitle style={{ fontWeight: "600" }}>
            {video.snippet.title}
          </CardTitle>
          <CardSubtitle style={{ fontWeight: "700" }}>
            {video.snippet.channelTitle}
          </CardSubtitle>
          <CardText>{limitDescription(video.snippet.description, 50)}</CardText>
        </CardBody>
      </Link>
    </Card>
  );
};

export default VideoListitem;
