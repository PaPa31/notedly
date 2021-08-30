 import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ButtonAsLink from './ButtonAsLink';

// Локальный запрос
const IS_LOGGED_IN = gql`
{
    isLoggedIn @client
}
`

const HeaderBar = styled.header`
    width: 100%;
    padding: 0;
    display: flex;
    height: 64px;
    position: fixed;
    align-items: center;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;

    @media (min-width: 360px) {
        padding: 0.5em 1em;
    }
`

const LogoText = styled.h1`
    margin: 0;
    padding: 0;
    display: inline;

a {
    text-decoration: none;
    color: inherit !important;
}

@media (min-width: 320px) {
    span {
        padding-right: 6px;
    }
}
`

const UserState = styled.div`
    margin-left: auto;
`

const LastA = styled.span`
    a {
        display: block
    }
    @media(min-width: 500px) {
        a {
            display: inline-block
        }
    }
`



const Header = props => {
    // Хук запроса состояния авторизации пользователя
    const { data, client } = useQuery(IS_LOGGED_IN);
    return (
        <HeaderBar>
            {/* <img src={logo} alt="Gudron Logo" height="40" /> */}
            <LogoText>
                <span aria-hidden="true" role="img">💬</span>
                <Link to={'/'}>TextBlock</Link>
            </LogoText>
            {/* Если авторизован, отображаем ссылку log out, в противном
 случае отображаем варианты sign in и sign up */}
            <UserState>
                {data.isLoggedIn ? (
                    <ButtonAsLink
                        onClick={() => {
                            // Удаляем токен
                            localStorage.removeItem('token');
                            // Очищаем кэш приложения
                            client.resetStore();
                            // Обновляем локальное состояние
                            client.writeData({ data: { isLoggedIn: false } });
                            // Перенаправляем пользователя на домашнюю страницу
                            props.history.push('/');
                        }}
                    >
                        Logout 🚪
                    </ButtonAsLink>
                ) : (
                        <p>
                            <Link to={'/signin'}>Sign In 🔓</Link> or{' '}
                            <LastA><Link to={'/signup'}>Sign Up 🔑</Link></LastA>
                        </p>
                    )}
            </UserState>
        </HeaderBar>
    );
}

 export default withRouter(Header);
