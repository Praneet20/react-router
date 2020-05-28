import React from 'react';
import cake from "./cakeee.png";
import styled from 'styled-components';

const Cake = () =>
{
return(
   
<div className="container py-5">
    <img src={cake} alt="..." style={{width:"15rem"}}/>
    <h2 >Cake Baking Competition!!</h2>
   <h3>Cake Baking Competion will take place at the Main lobby of Little Bakery. Contstants should report 1 hour before the beginning of the competition.Competition will start at 6pm, Tuesday.</h3>
   
</div>

);
};


export default Cake;

