// Импортируем createGlobalStyle и нормализуем
import normalize from 'normalize.css';
import { createGlobalStyle } from 'styled-components';
// Можно написать CSS как шаблонный литерал JS
export default createGlobalStyle`
${normalize}
*, *:before, *:after {
   box-sizing: border-box;
}
body, html {
   height: 100%;
   margin: 0;
}
body {
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
background-color: #14181B;
line-height: 1.4;
color: #adbac7;
}
div#root {
    height: 100%;
}
h1,h2,h3,h4,h5,h6 {
   color: #9279BA;
}
a:link, a:visited {
   color: #9279BA;
}
a:hover,a:focus {
   color: #B9A5E2;
}
code {
   margin: 0;
   padding: .2em .4em;
   color: #C1A972;
}
pre {
   line-height: 1.45;
   overflow: auto;
   padding: 16px;
}
code,pre {
   max-width: 100%;
   background-color: #101214;
   border-radius: 6px;
}
blockquote {
   border-left: .25em solid #768390;
   padding: 0 1em;
   font-style: italic;
}
blockquote p{
   color: #768390
}
nav::-webkit-scrollbar{
height:auto;width:1px
}
nav {
    background: #0A0C0E;
}

header {
    background: #0A0C0E;
}
`;
