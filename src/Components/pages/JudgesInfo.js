import React from 'react';
import styled from 'styled-components';
import Footer from '../Layouts/Footer';
import {Link, useParams} from "react-router-dom";
import {Button} from "./Button";
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import Avatar from './Avatar';

const JUDGES = [
    {
     id: 0,
     spkimg: avatar1,
     name: "John Gragory",
     occupation: "Head Chef and owner at Little Bakery",
     description: "Chef Gragory has opened a string of successful restaurants across the globe, from the UK and France to Singapore and Hong Kong, to the United States. Gragory has also become a star of the small screen both in the UK and internationally, with shows such as Kitchen Nightmares, Hell’s Kitchen, Hotel Hell and MasterChef US."


    },

    {
        id: 1,
        spkimg: avatar2,
        name: "Lilly Dsouza",
        occupation: "Head Chef and owner at yoyo Bakery",
        description: "Chef Dsouza has opened a string of successful restaurants across the globe, from the UK and France to Singapore and Hong Kong, to the United States. Gragory has also become a star of the small screen both in the UK and internationally, with shows such as Kitchen Nightmares, Hell’s Kitchen, Hotel Hell and MasterChef US."
   
   
       }


]

const JudgesInfo = () =>
{
    let {id} = useParams();
    let judges = JUDGES[parseInt(id,0)]

    return(
        <>
        
        <MainContainer>
        <div className="container mb-5">
 <div className="card">
     <Avatar judgesImage={judges.spkimg}/>
<h2>{judges.name}</h2>

<div className="card-body px-0">
    <h4 className="card-title">{judges.occupation}</h4>
    <h5 className="card-text">{judges.description}</h5>
    <Link to="/judgeslist">
<Button className="btn btn-primary text-uppercase text-center">Back to Judges</Button>

    </Link>
</div>
 </div>



        </div>
      
        </MainContainer>
        <Footer/>
        
        </>
    );

}

export default JudgesInfo

// styled components

const MainContainer = styled.div`

background: var(--deep-dark-blue);
padding: 5rem 0 5rem;

.card {
    background: transparent;
    border: none;
}

h2{
    color: var(--magenta);
    padding-top: 1rem;
}

h4{
    color: var(--pink);
}

h5{
    color: var(--orange);
}

@media (min-width: 760px){
    .col-md-6{
      max-width:40% !important;
          
      }
  }



`;
