import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = (props: any) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const renderContent = () => {
    if (!props.stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete the stream with title: "${props.stream.title}"?`;
    }
  };

  const renderActions = () => {
    const { id } = props.match.params;
    return (
      <>
        <button
          className="ui primary button"
          onClick={() => props.deleteStream(id)}
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </>
    );
  };
  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
      onDisMiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  stream: state.streams[ownProps.match.params.id],
});

const mapDispatchToProps = { fetchStream, deleteStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
