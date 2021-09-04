import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
// Импортируем локальный запрос IS_LOGGED_IN
import { IS_LOGGED_IN } from '../gql/query';
// Импортируем компоненты UI авторизованного пользователя
import NoteUser from './NoteUser';

// Ограничиваем расширение заметок до 800 пикселей
const StyledNote = styled.article`
    max-width:800px;
    img {
        max-width: 100%;
    }
h1,h2,h3,h4,h5,h6{
    color: #ac9f8e;
}
`;

// Стилизуем метаданные заметки
const MetaData = styled.div`
@media (min-width: 500px) {
    display: flex;
    align-items: top;
}
a, button {
  color: #95c3c7;
}
a:hover, button:hover {
  color: #2e7c83
}
`;

// Добавляем пространство между аватаром и метаданными
const MetaInfo = styled.div`
    padding-right: 1em;
    display: inline-block;
    float: left;
`;

// Выравниваем 'UserActions' по правой стороне на больших экранах
const UserActions = styled.div`
    margin-left: auto;
    text-align: left;
    padding: 10px 0;
    clear: left;

    em {
        color: #95c3c7;
    }

    span {
        display: none;
    }

    a {
        padding: 0 5px;
    }

@media (min-width: 500px) {
    text-align: right;
    padding: 0;
    max-width: 160px;

    span {
        display: initial;
    }

    a {
        padding: 0;
    }
}
`

const Note = ({ note }) => {
    const { loading, error, data } = useQuery(IS_LOGGED_IN);
    // Если данные загружаются, выдаем сообщение о загрузке
    if (loading) return <p>Loading...</p>;
    // Если при получении данных произошел сбой, выдаем сообщение об ошибке
    if (error) return <p>Error!</p>;
    return (
        <StyledNote>
            <MetaData>
                <MetaInfo>
                    <img
                        src={note.author.avatar}
                        alt={`${note.author.username} avatar`}
                        height="50px"
                    />
                </MetaInfo>
                <MetaInfo>
                    <em>by</em> {note.author.username} <br />
                    {format(note.createdAt, 'MMM DD YYYY HH:mm')}
                </MetaInfo>
                {data.isLoggedIn ? (
                    <UserActions>
                        <NoteUser note={note} />
                    </UserActions>
                ) : (
                        <UserActions>
                            <em>Favorites:</em> {note.favoriteCount}
                        </UserActions>
                    )}
            </MetaData>
            <ReactMarkdown source={note.content} />
        </StyledNote>
    );
}

export default Note;