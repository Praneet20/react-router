import React from 'react';
import styled from 'styled-components';

const Avatar = ({judgesImage}) =>
{

    return(
        <div>

            <img src={judgesImage} alt="..." style={{width: "15rem"}}/>
        </div>
    );

}

export default Avatar
