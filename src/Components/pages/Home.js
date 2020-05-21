import React from 'react';
import styled from 'styled-components';
import Navbar from "../Layouts/Navbar";


const Home = () =>
{
return(
    <MainContainer className="home-main-container">
        <Navbar/>
<div className="container">
<h1 className="display-5 text-uppercase py-5 text-center">
Welcome to Javascript Conference 2020
</h1>
<div classNmae="form-box"> 
<h3 className="display-6 text-uppercase py-3 text-center">
    Register and Reserve your seat
</h3>
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
);
}

export default Home

// styled components

const MainContainer = styled.div`

h1 {
    color: var(--orange);
},
p {
    color: var(--orange);
},
h3 {
    color: var(--orange);
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
    background: var(--dark-red);
    

}


`;
