import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

type Props = {};

const StreamEdit = (props: any) => {
  useEffect(() => {
    console.log(props.match.params.id);
    props.fetchStream(props.match.params.id);
  }, []);

  const onSubmit = (formValues: any) => {
    console.log(formValues);
    props.editStream(props.match.params.id, formValues);
  };

  const renderStream = () => {
    if (!props.stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <StreamForm
          initialValues={_.pick(props.stream, "title", "description")}
          onSubmit={onSubmit}
        />
      );
    }
  };

  return (
    <div>
      <h3>Edit a Stream</h3>
      {renderStream()}
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  // console.log(ownProps.match.params.id);
  // console.log(state.streams);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
