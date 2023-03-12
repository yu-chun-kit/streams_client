import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import flv from "flv.js";
import { fetchStream } from "../../actions";

type Props = {};

const StreamShow = (props: any) => {
  const videoRef = useRef<any>(null);
  let player: any = null;

  useEffect(() => {
    const { id } = props.match.params;
    props.fetchStream(id);
    buildPlayer();
  }, []);
  useEffect(() => {
    buildPlayer();
  }, [props.stream]);
  useEffect(() => {
    return () => {
      player.distory();
    }
  }, []);

  const buildPlayer = () => {
    if (player || !props.stream) {
      return;
    }

    const { id } = props.match.params;

    player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
  };

  const renderStream = () => {
    if (!props.stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <video ref={videoRef} style={{ width: "100%" }} controls />
          <h1>{props.stream.title}</h1>
          <h5>{props.stream.description}</h5>
        </div>
      );
    }
  };
  return renderStream();
};

const mapStateToProps = (state: any, ownProps: any) => ({
  stream: state.streams[ownProps.match.params.id],
});

const mapDispatchToProps = { fetchStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
