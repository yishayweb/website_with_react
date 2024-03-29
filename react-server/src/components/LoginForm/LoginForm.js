import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../actions'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class LoginForm extends Component {

  onSubmit(values) {
    console.log("submitted");
    console.log(values);
    this.props.login(values, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="email"
          label="Email"
          type="text"
          component={renderField} />
        <Field
          name="password"
          label="Password"
          type="text"
          component={renderField} />
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => this.props.switchForm()}>Signup</button>
        </div>
      </form>
    )
  }
}

function mapStateToProps() {
  return {};
}

export default reduxForm({
  form: 'loginForm',
  destroyOnUnmount: false,
})(connect(mapStateToProps, { login })(withRouter(LoginForm)));
