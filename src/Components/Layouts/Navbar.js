import React from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';
import logo from './bakary.png';


const Navbar = () =>
{
    return(
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#"><img src={logo}/></Link>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/judgeslist">Judges</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/events">Events</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
     
    </ul>
 
  </div>
</nav>      
  </NavbarContainer>
    )
}
export default Navbar
// styled components

const NavbarContainer = styled.div`
.nav-link{
    color: white !important;
    &:hover{
        background: var(--tomato) !important;
        
}
.active{
    background: var(--tomato) !important;
    
}

}
img{
    width: 3.5rem;
}
nav{
    background: var(--yummy-burgundy) !important;
}

`;