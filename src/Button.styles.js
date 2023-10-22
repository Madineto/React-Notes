import styled from 'styled-components'

  const StyledButton = styled.button`
 border: 3px solid yellow;
  background-color: ${(props)=> props.variant === 'outline' ? '#fff' : 'orange'}; //red;
  
  color:${(props)=> props.variant === 'outline' ? 'orange' : 'fff'}; 
   //blue;
  padding: 15px, 32x;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0-5 all ease-out;
 `
 export default StyledButton;