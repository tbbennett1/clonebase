import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    // formType: 'signup',
    navLink: <Link to="/signin">Already have a Clonebase account? Log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);