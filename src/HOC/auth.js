import React from "react";
import { connect } from "react-redux";

export default (WrappedComponent, redirect = false, path = "/") => {
  class Auth extends React.Component {
    componentDidMount() {
      if ((this.props.auth && redirect) || (!this.props.auth && !redirect)) {
        this.props.history.push(path);
      }
    }
    componentDidUpdate() {
      if ((this.props.auth && redirect) || (!this.props.auth && !redirect)) {
        this.props.history.push(path);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      auth: state.user.auth
    };
  }

  return connect(mapStateToProps)(Auth);
};
