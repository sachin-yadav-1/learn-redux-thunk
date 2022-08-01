import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  renderUser() {
    if (!this.props.user) return null;
    return <div className="header">{this.props.user.name}</div>;
  }

  render() {
    return <div>{this.renderUser()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.userId);
  return { user: user };
};

export default connect(mapStateToProps)(UserHeader);
