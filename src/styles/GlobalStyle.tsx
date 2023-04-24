import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body, h1, h2, h3, ul, li, p, span {
  margin: 0;
}

html {
  font-family: "Roboto", sans-serif;
}

img {
  display: block;
  max-width: 100%;
  
}

ul {
    list-style: none;
    padding: 0;

}

input {
  all: unset
}

input,
button,
textarea,
select {
  font-family: inherit;
  border: none;
  cursor: pointer;  
  background-color: transparent;
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {

  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
`;
export default GlobalStyle;
