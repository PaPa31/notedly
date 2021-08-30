import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 1em;

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
 /* Мы можем вложить стили в styled-components */
 /* Следующие стили будут применены к ссылкам в компоненте NavList */
 a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #C24428;
 }
 a:visited {
    color: #C24428;
 }
 a:hover, a:focus {
    color: #D4C08D;
 }
 `

const Navigation = () => {
    return (
        <Nav>
            <NavList>
                <li>
                    <span aria-hidden="true" role="img">🏠 </span>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <span aria-hidden="true" role="img">📝 </span>
                    <Link to="/mynotes">My Notes</Link>
                </li>
                <li>
                    <span aria-hidden="true" role="img">👍🏼 </span>
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                    <span aria-hidden="true" role="img">➕ </span>
                    <Link to="/new">New</Link>
                </li>
            </NavList>
        </Nav>
    )
}

export default Navigation
