import React from 'react';
import { NavLink, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../Layouts/Footer';
import eventsdata from "../../Events.json";
//Nested Components
import Cake from './Cake';
import Shake from './Shake';
import { useState } from 'react';



const Events = () => {
  // const [text, setText] = useState('')
  // const [color, setColor] = useState('red')
  // const [flavor, setFlavor] = useState('')
  // return (
  //   <>
  //     <div className="container py-5">
  //       <h2 className="text-center mt-5 pt-3 pb-5 text-uppercase">Events</h2>
  //       <button className="badge badge-secondary p-2 m-2" onClick={()=> {
  //         setText('cake')
  //         setColor('burgundy')
  //         setFlavor('chocolate')
  //       }
  //         }>
  //         Cake Making
  //       </button>
  //       <button className="badge badge-secondary p-2 m-2"  onClick={()=> {
  //         setText('Shake')
  //         setColor('pink')
  //         setFlavor('strawberry')
  //         }}>
  //         Shake Making
  //       </button>
  //       <Cake text={text} color={color} flavor={flavor}/>
  //     </div>

  //   </>

  // );


  return(
    <>
    <MainContainer>
    <div className="container py-5">
   <h2 className="text-center mt-5 pt-3 pb-5 text-uppercase">Events</h2></div>
   <div className="text-center"><NavLink to="/events/cake" className="badge badge-secondary p-2 m-2">Cake Baking</NavLink>    
   <NavLink to="/events/shake" className="badge badge-secondary p-2 m-2" activeClassName="active">Shake Making</NavLink>  </div>
   <Redirect to="/events/cake"/>
   <Route path="/events/cake" render={() => <Cake data={eventsdata}/>}/>
   <Route path="/events/shake" render={() => <Shake data={eventsdata}/>}/>
   </MainContainer>
   <Footer/>
    </>
  );

}

export default Events

//Styled Components

const MainContainer  = styled.div`

background: var(--deep-dark-blue);
height: 100vh;
h2{
  color: var(--tomato);
}

h3{
  color: var(--pink);
}

.active{
  background: var(--tomato);
  color: white;
  &:focus {
    background: var(--dark-tomato);
  }
}
.m-2 {
  margin: 1.5rem!important;
}
.p-2 {
  padding: 1.5rem 1.5rem 1.5rem 1.5rem !important;
}
.badge-secondary {
  color: #fff;
  background-color: #E91E63;
}

.badge {
  font-size: 114%;
}

.mt-5, .my-5 {
  margin-top: 0rem!important;
}
.pb-5, .py-5 {
  padding-bottom: 1rem!important;
}
`;