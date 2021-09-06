import { useQuery } from '@apollo/client';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { IS_LOGGED_IN } from '../gql/query';
import textblock from '../img/textblock-1.svg';
import logo from '../img/textblock-logo.svg';
import ButtonAsLink from './ButtonAsLink';

const HeaderBar = styled.header`
  width: 100%;
  padding: 0 2px 0 0;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;

  h1 {
    color: #e7ddff;
  }

  a {
    text-decoration: none;
  }
  button {
    color: #9279ba;
    font-style: italic;
  }
  button:hover {
    color: #b9a5e2;
  }

  img {
    padding: 0 3px 0 6px;
    vertical-align: bottom;
  }

  @media (min-width: 320px) {
    padding: 0.5em 0.5em 0 1em;
    img {
      padding: 0 5px 0 0;
    }
  }
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
  position: absolute;
  background: url(${textblock}) center center no-repeat;
  height: 24px;
  width: 162px;
  text-indent: -30000px;
  top: 19px;
  @media (min-width: 320px) {
    top: 22px;
    span {
      padding-right: 6px;
    }
  }
`;

const UserState = styled.div`
  margin-left: auto;
  a {
    text-decoration: underline;
    padding: 5px 0;
    font-style: italic;
  }
  @media (min-width: 500px) {
    a {
      padding-right: 10px;
    }
  }
`;

const LastA = styled.span`
  a {
    display: block;
  }
  @media (min-width: 500px) {
    a {
      display: inline-block;
    }
  }
`;

const Header = props => {
  // Хук запроса состояния авторизации пользователя
  const { data, client } = useQuery(IS_LOGGED_IN);
  return (
    <HeaderBar>
      <Link to={'/'}>
        <img src={logo} alt="Textblock Logo" height="40" />
        <LogoText>TextBlock</LogoText>
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
              client.writeData({
                data: { isLoggedIn: false }
              });
              // Перенаправляем пользователя на домашнюю страницу
              props.history.push('/');
              window.location = '/';
            }}
          >
            Logout 🚪
          </ButtonAsLink>
        ) : (
          <div>
            <Link to={'/signin'}>Sign In 🔓</Link>
            <LastA>
              <Link to={'/signup'}>Sign Up 🔑</Link>
            </LastA>
          </div>
        )}
      </UserState>
    </HeaderBar>
  );
};

export default withRouter(Header);
