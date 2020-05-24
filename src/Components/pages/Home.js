import React from 'react';
import styled from 'styled-components';
import Navbar from "../Layouts/Navbar";
import logo from '../Layouts/bakary.png';
import Footer from '../Layouts/Footer';

const Home = () =>
{
return(
    <>
    <MainContainer className="home-main-container">
     
<div className="container">
<h1 className="display-5 text-uppercase py-5 text-center">
2020 Baking Competition
</h1>
<p className="text-center"><img src={logo} style={{width:"15rem"}}/></p>
<div classNmae="form-box"> 
<h2 className="display-6 text-uppercase py-3 text-center">
    Register and Reserve your seat
</h2>
<form>
    <div className="form-row mr-auto">
        <div className="col-md-6 mb-4">
            <input type="text" className="form-control" placeholder="First Name"/>
        </div>

        <div className="col-md-6 mb-4">
            <input type="text" className="form-control" placeholder="Last Name"/>
        </div>
        <div className="col-md-6 mb-4">
            <input type="text" className="form-control" placeholder="Phone Number"/>
        </div>
        <div className="col-md-6 mb-4">
            <input type="text" className="form-control" placeholder="Email"/>
        </div>

    </div>
    <button className="btn btn-primary text-uppercase">Reserve your seat</button>
</form>
</div>
</div>
</MainContainer>
<Footer/>
</>
);
}

export default Home

// styled components

const MainContainer = styled.div`
height: 100vh;

h1 {
    color: var(--magenta);
},
p {
    color: var(--orange);
},
h2 {
    color: var(--magenta);
}
.form-box{
    padding: 6rem 0;

}
form{
    width: 50rem;
    margin: 0 auto;

}
button{
    width: 100%;
    background: transparent;
    border-color: var(--orange);
    &:hover{
        background: var(--dark-tomato);
        border-color: var(--dark-red);
    };
    &:focus{
        background: var(--tomato);
        border-color: var(--tomato);
    }

}
input{
    background: var(--pink);
    

}
@media (max-width: 760px){
    form{
        width:100%;
    }
}

@media (min-width: 760px){
    form{
        width:100%;
        height:100%;
    }
}


`;
