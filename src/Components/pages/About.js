import React from 'react'
import styled from 'styled-components';
import Footer from '../Layouts/Footer';
import logo from '../Layouts/bakary.png';

const About = () => {
    return (
        <>
        <MainContainer>
         <div className="container py-5">
<h3 className="display-3">About us</h3>
<img src={logo} style={{width:"10rem"}}/>
<p> baking-pic.jpgHi! My name is Jamie, founder of Branded Bites and its child company, Little Bakerz. I’ve always had a passion for food, and as you’ll see in this photo, was a little baker myself at the age of 8.</p>
<p>Knowing that eventually I wanted to become an entrepreneur, I dipped my toes in various roles and companies growing up. And at a turning point in my journey, I learned about something that fascinated me - edible ink technology and the ability to print images directly onto food. It wasn’t long until I founded Branded Bites, offering custom cookies with colour-matched logos and personalized designs. I started the company out of my basement with one employee and a handful of customers, and have since expanded our operations to a 7,000 square foot production facility in Toronto with a team of 10 working with hundreds of clients across North America.</p>
<p>I care deeply about the companies I’ve built and continue to value every customer we service, every order we receive, and every smile we help to make</p>
    <p>Thanks for visiting our site and for taking the time to get to know about me and my journey! I hope to hear from you!</p> 
     
         </div>
         </MainContainer>
         <Footer/>
        </>
    )
}
export default About

//Styled Components

const MainContainer  = styled.div`

background: var(--deep-dark-blue);
height: 100vh;

h3{
    color: var(--dark-red);
}

p{
    color: var(--orange);
}
`;