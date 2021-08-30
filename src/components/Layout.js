import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';

// Стили компонента
 const Wrapper = styled.div`
 /* Можно применить в стилизованном компоненте стили медиазапросов */
 /* Таким образом, макет будет применяться только для экранов
 шириной 700 пикселей и больше */
 @media (min-width: 700px) {
    display: flex;
    top: 64px;
    position: relative;
    width: 100%;
    flex: auto;
    flex-direction: column;
 }
 `;
 const Main = styled.main`
    height: 100%;
    width: 100%;
    padding: 1em;
    padding-top: 116px;
    
 @media (min-width: 425px) {
    padding: 1.5em;
    padding-top: 150px;
 }

 @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    width: calc(100% - 220px);
    padding: 4em;
 }
 `

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header />
            <Wrapper className="wrapper">
                <Navigation />
                <Main>{children}</Main>
            </Wrapper>
        </React.Fragment>
    )
}

export default Layout
