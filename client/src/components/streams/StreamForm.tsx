import React from "react";
import { Link } from "react-router-dom";
// import { Field, reduxForm } from "redux-form";
import { Form, Field } from "react-final-form";

const StreamForm = (props: any) => {
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

  const onSubmit = (formValues: any) => {
    props.onSubmit(formValues);
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues: any) => {
        const errors: any = {};
        if (!formValues.title) {
          errors.title = "You must enter a title";
        }
        if (!formValues.description) {
          errors.description = "You must enter a description";
        }

        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className="ui form error">
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

          <div className="buttons">
            <button
              type="submit"
              disabled={submitting}
              className="ui button primary"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
              className="ui button"
            >
              Reset
            </button>
            <Link to="/" className="ui button">
              Cancel
            </Link>
          </div>
        </form>
      )}
    />
  );
};

export default StreamForm;
