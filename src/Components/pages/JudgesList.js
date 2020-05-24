import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import {Button} from './Button';
import Footer from '../Layouts/Footer';

const JudgesList = () =>
{
return(
    <>
    <MainContainer>
    <div className="home-main-container">
<div className="container">
    <div className="row mx-auto justify-content-center">
        {/* Judge 1 */}
<div className="card col-md-6 p-2">
    <img src={avatar1} alt="Mr. John" className="card-img-top mx-auto"/>
    <div className="card-body">
        <h2 className="card-title text-center pb-2">
            John Gragory
        </h2>
<h4 className="text-center">Category: <b>Cakes</b></h4>
{/* <p className="text-center">He is the owner of the Little Bakery and the Masterchef winner</p> */}
<Link to="/">
    <Button className="btn btn-primary text-uppercase text-center">More Information about John</Button>
</Link>
    </div>

</div>

   {/* Judge 2 */}
   <div className="card col-md-6 p-2">
    <img src={avatar2} alt="Mrs. Lilly" className="card-img-top mx-auto"/>
    <div className="card-body">
        <h2 className="card-title text-center pb-2">
            Lilly Dsouza
        </h2>
<h4 className="text-center">Category: <b>Shakes</b></h4>
{/* <p className="text-center">She is the owner of the Hot Shot  Bakery and winner of many cooking contests.</p> */}
<Link to="/">
    <Button className="btn btn-primary text-uppercase text-center">More Information about Lilly</Button>
</Link>
    </div>

</div>
    </div>




</div></div>
</MainContainer>
<Footer/></>
)
}

export default JudgesList 

// styled components

const MainContainer = styled.div`
.card-img-top{
    width: 25rem;
}

.card{
    margin: 1rem;
    background: transparent;
}

h2{
    color: var(--magenta);
}

h4{
    color: var(--magenta);
}

p{
    color: var(--tomato);
}

@media (min-width: 760px){
  .col-md-6{
    max-width:40% !important;
        
    }
}


`;