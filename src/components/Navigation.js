import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 0;
    position: fixed;
    width: 100%;

 @media (min-width: 425px) {
    padding:0.7em;
 }

 @media (max-width: 700px) {
     padding-top: 64px;
 }

 @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
 }
 `;
const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;
li {
    display: inline-block;
    margin: 0 4px;
}
span {display: none}
@media (min-width: 700px){
   li{ display: block;}
   span{padding-right: 5px;}
}
@media (min-width:375px) {
    li{margin: 0 5px;}
    span {display: initial}
}
@media (min-width:425px) {
    li{margin: 7px;}
}
 /* Мы можем вложить стили в styled-components */
 /* Следующие стили будут применены к ссылкам в компоненте NavList */
a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #9279BA;
}
a:visited {
    color: #9279BA;
}
a:hover, a:focus {
    color: #B9A5E2;
}
 `

const Navigation = () => {
    return (
        <Nav>
            <NavList>
                <li>
                    <span aria-hidden="true" role="img">🏠</span>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <span aria-hidden="true" role="img">📝</span>
                    <Link to="/mynotes">My Notes</Link>
                </li>
                <li>
                    <span aria-hidden="true" role="img">👍🏼</span>
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                    <span aria-hidden="true" role="img">➕</span>
                    <Link to="/new">New</Link>
                </li>
            </NavList>
        </Nav>
    )
}

export default Navigation
