import React from 'react';
import {Route, Link} from 'react-router-dom';

const CustomMenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <li className={match ? "nav-item active" : 'nav-item'}>
                <Link to = {to} className="nav-link">{label}{match ? <span className="sr-only">(current)</span> : ''}</Link>
            </li>
        )}
      />
    );
  }

export default CustomMenuLink;