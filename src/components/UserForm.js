import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
 
 const Wrapper = styled.div`
    border: 1px solid #3c361f;
    max-width: 500px;
    padding: 1em;
    margin: 0 auto;
 `;
 const Form = styled.form`
 label,
 input {
    display: block;
    line-height: 2em;
 }
 input {
    width: 100%;
    margin-bottom: 1em;
    background-color: black;
    border: none;
    padding-left: 5px;
    color: #757575;
 }
 `;

const UserForm = props => {
    // Устанавливаем состояние формы по умолчанию
    const [values, setValues] = useState();
    // Обновляем состояние, когда пользователь вводит данные в форму
    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    return (
        <Wrapper>
            {/* Отображаем соответствующий заголовок формы */}
            {props.formType === 'signup' ? <h2>Sign Up 🔑</h2> : <h2>Sign In 🔓</h2>}
            {/* Выполняем мутацию, когда пользователь отправляет форму */}
            <Form
                onSubmit={e => {
                    e.preventDefault();
                    props.action({
                        variables: {
                            ...values
                        }
                    });
                }}
            >
                {props.formType === 'signup' && (
                    <React.Fragment>
                        <label htmlFor="username">👤 Username:</label>
                        <input
                            required
                            type="text"
                            id="username"
                            name="username"
                            placeholder="username"
                            onChange={onChange}
                        />
                    </React.Fragment>
                )}
                <label htmlFor="email">📭 Email:</label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                />
                <label htmlFor="password">🔐 Password:</label>
                <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                />
                <Button type="submit">🏹 Submit</Button>
            </Form>
        </Wrapper>
    );
}
export default UserForm;