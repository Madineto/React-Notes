import StyledButton from "./Button.styles";

export default StyledButton



// import styled from "styled-components";

// const StyledButton = styled.button`
// border: 1px solid yellow;
// background-color: red;
// color: blue;
// padding: 15px, 32x;
// text-align: center;
// text-decoration: none;
// display: inline-block;
// font-size: 16px;
// cursor: pointer;
// transition: 0-5 all ease-out;
// `
// export default StyledButton; 




// import { render } from '@testing-library/react';
// import React from 'react'
// import styled from 'styled-components';


// const Button = styled.button`
//   display: inline-block;
//   color: #BF4F74;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #BF4F74;
//   border-radius: 3px;
//   display: block;
// `;

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

// render(
//   <div>
//     <Button>Normal Button</Button>
//     <Button as="a" href="#">Link with Button styles</Button>
//     <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
//   </div>
// );


// // This could be react-router-dom's Link for example
// const Link = ({ className, children }) => (
//   <a className={className}>
//     {children}
//   </a>
// );

// const StyledLink = styled(Link)`
//   color: #BF4F74;
//   font-weight: bold;
// `;

// render(
//   <div>
//     <Link>Unstyled, boring Link</Link>
//     <br />
//     <StyledLink>Styled, exciting Link</StyledLink>
//   </div>
// );
// export default Button