import React from 'react';
import milkshake from "./milkshake.png";

const Shake = () =>
{
return(
<div className="container py-5">
    <img src={milkshake} alt="..."  style={{width:"8rem"}}/>
    <h2>Shake Making Competition!!</h2>
    <h3>Shake Baking Competion will take place at the Main lobby of Little Bakery. Contstants should report 1 hour before the beginning of the competition.Competition will start at 8pm, Tuesday.</h3>
   
</div>
);
};


export default Shake;