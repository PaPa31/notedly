import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
    height: 100%;
    max-width: 800px;
`;

const Form = styled.form`
    height: 100%;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 90%;
    background:#14181B;
    border-radius: 5px;
    border-color: #3a3a3a;
    resize: none;
    padding: 10px;
    color:#AEAFB0;
    outline: none;
`;

const NoteForm = props => {
    // Устанавливаем состояние формы по умолчанию
    const [value, setValue] = useState({ content: props.content || '' });
    // Обновляем это состояние при вводе пользователем данных
    const onChange = event => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    };
    return (
        <Wrapper>
            <Form
                onSubmit={e => {
                    e.preventDefault();
                    props.action({
                        variables: {
                            ...value
                        }
                    });
                }}
            >
                <TextArea
                    required
                    type="text"
                    name="content"
                    placeholder="Note content"
                    value={value.content}
                    onChange={onChange}
                />
                <Button type="submit">📌 Save</Button>
            </Form>
        </Wrapper>
    );
}
 export default NoteForm;