import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function Header(props) {
  const {branding}= props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
    <div className="container">
    <a href="/" className="navbar-brand">{branding}</a>
    <div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link"><i className='fas fa-home'> </i> HOME</Link>
         </li>
         <li>
         <Link to="/contact/add" className="nav-link"><i className='far fa-check-circle'> </i> ADD CONTACT</Link>
          
         </li>
         <li>
         <Link to="/about" className="nav-link"><i className='fas fa-question'> </i> ABOUT</Link>

         </li>
      </ul>
    </div>
    </div>
    </nav>
  );
};

 Header.defaultProps ={
   branding: 'My App'
 };



 Header.propTypes ={
   branding: PropTypes.stringisRequired,
 };