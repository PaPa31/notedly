import { gql, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';

// Запрос new note
const NEW_NOTE = gql`
mutation newNote($content: String!) {
    newNote(content: $content) {
        id
        content
        createdAt
        favoriteCount
        favoritedBy {
            id
            username
        }
        author {
            username
            id
        }
    }
}
`
const NewNote = props => {
    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'New Note — Notedly';
    });
    const [data, { loading, error }] = useMutation(NEW_NOTE, {
        // Повторно получаем запросы GET_NOTES и GET_MY_NOTES, чтобы обновить кэш
        refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
        onCompleted: data => {
            // В конце перенаправляем пользователя на страницу заметки
            props.history.push(`note/${data.newNote.id}`);
        }
    })

    return (
        <React.Fragment>
            {/* Пока мутация загружается, выдаем сообщение о загрузке */}
            {loading && <p>Loading...</p>}
            {/* В случае сбоя выдаем сообщение об ошибке */}
            {error && <p>Error saving the note</p>}
            {/* Компонент формы, передающий данные мутации в качестве prop */}
            <NoteForm action={data} />
        </React.Fragment>
    );
}

export default NewNote;