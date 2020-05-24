import styled from 'styled-components';


export const Button = styled.button`
margin: 30px;
background-color: transparent;
background-repeat: no-repeat;
border-color: var(--dark-red);
&:hover{
    background-color: var(--dark-tomato);
    border-color: var(--dark-red);
},

&:focus{
    background-color: var(--tomato) !important;
    border-color: var(--tomato) !important;
}


`;