import React, { Component } from "react";
import { Autobind } from '@utils';
import "./Header.css";
import { Link } from 'react-router-dom';

export class Header extends Component {
  @Autobind
  handleClick() {
    console.log('click')
  }

  render() {
    return (
      <div className="header">
        <div className="header-left">
          <Link to={'/dashboard'} className="header-nav-button active">Dashboard</Link>
          <Link to={'/users'} className="header-nav-button">Users</Link>
        </div>
        <div className="header-right">
          <div className="user-panel" onClick={this.handleClick}>Hello, Username!</div>
        </div>
      </div>
    );
  }
}
