import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const renderError = ({ error, touched }: any) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

const renderInput = ({ id, label, input, meta }: any) => {
  const className = `field ${meta.error && meta.touched ? "error" : ""}`;

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};

const StreamForm = (props: any) => {
  const onSubmit = (formValues: any) => {
    props.onSubmit(formValues);
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field
        id="title"
        name="title"
        component={renderInput}
        label="Enter Title"
      />
      <Field
        id="description"
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
      <Link to="/" className="ui button">Cancel</Link>
    </form>
  );
};

const validate = (formValues: any) => {
  const errors: any = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamForm);

export default formWrapped;