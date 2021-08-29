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
    background-color: #fff;
    line-height: 1.4;
 }
 a:link, a:visited {
    color: #0077cc;
 }
 a:hover,a:focus {
    color: #004499;
 }
 code {
    margin: 0;
    padding: .2em .4em;
}
pre {
    line-height: 1.45;
    overflow: auto;
    padding: 16px;
}
code,pre {
    max-width: 100%;
    background-color: #eaecef;
    border-radius: 6px;
    font-size: 85%;
}
blockquote {
    border-left: .25em solid #ccc;
    color: #777;
    padding: 0 1em;
}
`