import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const limitDescription = (description, letterlimit) => {
  return description.length <= letterlimit
    ? description
    : `${description.slice(0, letterlimit)}...`;
};

const PlayLisitem = ({ playlist }) => {
  return (
    <Card style={{ flexBasis: "250px", marginBottom: "15px" }}>
      <CardImg
        top
        width="100%"
        src={playlist.snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <CardBody>
        <CardTitle style={{ fontWeight: "600" }}>
          {playlist.snippet.title}
        </CardTitle>
        <CardSubtitle style={{ fontWeight: "700" }}>
          {playlist.snippet.channelTitle}
        </CardSubtitle>
        <CardText>
          {limitDescription(playlist.snippet.description, 50)}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default PlayLisitem;
