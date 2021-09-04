import { useQuery } from '@apollo/client';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { IS_LOGGED_IN } from '../gql/query';
import logo from '../img/textblock-logo.svg';
import ButtonAsLink from './ButtonAsLink';

const HeaderBar = styled.header`
    width: 100%;
    padding: 0;
    display: flex;
    height: 64px;
    position: fixed;
    align-items: center;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;

a {
    text-decoration: none;
}
button {
    color:#9279ba;
}
button:hover {
    color: #B9A5E2;
}

img {
    padding: 0 3px 0 6px;
    vertical-align: bottom;
}

    @media (min-width: 360px) {
        padding: 0.5em 1em;
        img {
            padding: 0 5px 0 0;
        }
    }
`

const LogoText = styled.h1`
    margin: 0;
    padding: 0;
    display: inline;

@media (min-width: 320px) {
    span {
        padding-right: 6px;
    }
}
`

const UserState = styled.div`
    margin-left: auto;
a {
    text-decoration: underline;
}
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
            <Link to={'/'}>
                <LogoText>
                    <img src={logo} alt="Textblock Logo" height="40" />
                    TextBlock
                </LogoText>
            </Link>
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
