import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Navbar = ({ loggedIn, logout }) => {
  return (
    <div>
<<<<<<< HEAD
    <nav className="navbar navbar-default navbar-fixed-top">
    
      <div className="container">
        <div className="navbar-header">
        <br/>
          <Link className='navText'  to="/"><span  className="glyphicon glyphicon-home"></span></Link>
        </div>
        <ul className="nav navbar-nav">
          <br />
          <li><Link style={{color: 'white'}} className='navText' to="/rentals">Rentals</Link></li>
          <li><Link style={{color: 'white'}} className='navText' to="/services">Services</Link></li>
          <li><Link style={{color: 'white'}} className='navText' to="/About">About</Link></li>
          <li><Link style={{color: 'white'}} className='navText' to="/HowItWorks">How It Works</Link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          {loggedIn ?
            [
              <br />,
              <li className='navText' key={1}><Link style={{color: 'white'}}  className="nav-item nav-link" to="/MyItems">My Account</Link></li>,
              <li className='navText' key={2}><Link style={{color: 'white'}}  className="nav-item nav-link" to="/PostListing">Post Listing</Link></li>,
              <li className='navText' key={3}><a style={{color: 'white'}} className='navText' className="nav-item nav-link" href="/" onClick={logout}>Logout</a></li>
            ]
            :
            [
              <li><Link style={{color: 'white'}} className='navText' to="/signup"><span className="glyphicon glyphicon-user"></span>Signup</Link></li>,
              <li><Link style={{color: 'white'}} className='navText' to="/login"><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
            ]
          }
        </ul>
      </div>
     <br/>
    </nav>
   
=======
      <nav className="navbar navbar-default navbar-fixed-top navbar-collapse">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div class="container">
          <div class="navbar-header">
            <br />
            <Link className='navText' to="/"><span class="glyphicon glyphicon-home"></span></Link>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <br />
              <li><Link style={{ color: 'white' }} className='navText' to="/rentals">Rentals</Link></li>
              <li><Link style={{ color: 'white' }} className='navText' to="/services">Services</Link></li>
              <li><Link style={{ color: 'white' }} className='navText' to="/About">About</Link></li>
              <li><Link style={{ color: 'white' }} className='navText' to="/HowItWorks">How It Works</Link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              {loggedIn ?
                [
                  <br />,
                  <li className='navText' key={1}><Link style={{ color: 'white' }} className="nav-item nav-link" to="/MyItems">My Account</Link></li>,
                  <li className='navText' key={2}><Link style={{ color: 'white' }} className="nav-item nav-link" to="/PostListing">Post Listing</Link></li>,
                  <li className='navText' key={3}><a style={{ color: 'white' }} className='navText' className="nav-item nav-link" href="/" onClick={logout}>Logout</a></li>
                ]
                :
                [
                  <li><Link style={{ color: 'white' }} className='navText' to="/signup"><span class="glyphicon glyphicon-user"></span>Signup</Link></li>,
                  <li><Link style={{ color: 'white' }} className='navText' to="/login"><span class="glyphicon glyphicon-log-in"></span>Login</Link></li>
                ]
              }
            </ul>
          </div>
          <br />
        </div>
      </nav>

>>>>>>> alex
    </div>
  );
}

export default Navbar;