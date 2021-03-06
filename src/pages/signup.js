import { useApolloClient, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import UserForm from '../components/UserForm';
import { SIGNUP_USER } from '../gql/mutation';

const SignUp = props => {
  useEffect(() => {
    // Обновляем заголовок документа
    document.title = 'Sign Up — Notedly';
  });
  const client = useApolloClient();
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      // Сохраняем токен
      localStorage.setItem('token', data.signUp);
      // Обновляем локальный кэш
      client.writeData({ data: { isLoggedIn: true } });
      // Перенаправляем пользователя на домашнюю страницу
      props.history.push('/');
    }
  });
  return (
    <React.Fragment>
      <UserForm action={signUp} formType="signup" />
      {/* Если данные загружаются, отображаем сообщение о загрузке */}
      {loading && <p>Loading...</p>}
      {/* Если при загрузке произошел сбой, отображаем сообщение об ошибке */}
      {error && <p>Error creating an account!</p>}
    </React.Fragment>
  );
};
export default SignUp;
