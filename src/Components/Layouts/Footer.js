import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from './bakary.png';

const Footer = () =>
{
    return(
        <FooterContainer>
<div className="conatiner-fluid">
    <div className="row pt-5">
        {/* Column 1 */}
        <div className="col-sm-3 col-xs-12 d-flex">
 <ul className="list-inline mx-auto justify-content-center">
<Link to="/"><li><img src={logo} style={{width:"3.5rem"}}/></li>

</Link>
 </ul>

        </div>
        {/* Column 2 */}
        <div className="col-sm-3 col-xs-12 d-flex">
 <ul className="list-inline mx-auto justify-content-center">
<Link to="/"><li>Our Location</li></Link>
<li>Hayward Crescent</li>
<li>Scarborough</li>

 </ul>
        </div>
        {/* Column 3 */}
        <div className="col-sm-3 col-xs-12 d-flex">
 <ul className="list-inline mx-auto justify-content-center">
<Link to="/"><li>Connect with us</li></Link>
 </ul>
        </div>
        {/* Column 4 */}
        <div className="col-sm-3 col-xs-12 d-flex">
 <ul className="list-inline mx-auto justify-content-center">
<Link to="/"><li>Client Portal</li></Link>
 </ul>
        </div>
       

    </div>

</div>



        </FooterContainer>
    )
}

export default Footer

// styled components

const FooterContainer = styled.footer`
background: var(--deep-dark);
position: relative;
bottom:0;
width:100%;

ul li{
    list-style: none;
    color: var(--magenta);
}

a{
    color: var(--magenta);
    text-decoration: none;
    &:hover{
        color: var(--magenta);
        text-decoration: none;
    }
}


`;