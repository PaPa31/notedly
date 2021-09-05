import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
// Импортируем локальный запрос IS_LOGGED_IN
import { IS_LOGGED_IN } from '../gql/query';
import like from '../img/like.svg';
// Импортируем компоненты UI авторизованного пользователя
import NoteUser from './NoteUser';

// Ограничиваем расширение заметок до 800 пикселей
const StyledNote = styled.article`
    max-width:800px;

    p {
    overflow-wrap: anywhere;
    }

    img {
        max-width: 100%;
    }
`;

// Стилизуем метаданные заметки
const MetaData = styled.div`
@media (min-width: 500px) {
    display: flex;
    align-items: top;
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

    span {
        display: none;
    }

    a {
        padding: 0 5px;
        display: inline;
    }

    img {
        width: 24px;
        padding: 3px 1px 3px 2px;
        vertical-align: -6px;
    }

    a:link, a:visited, button {
        color: #AEAFB0;
    }
    a:hover, button:hover {
        color: #9279BA;
    }

@media (min-width: 500px) {
    text-align: right;
    padding: 0;
    max-width: 112px;

    span {
        display: initial;
    }

    a {
        padding: 0;
        display: block;
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
                                <img src={like} />: {note.favoriteCount}
                        </UserActions>
                    )}
            </MetaData>
            <ReactMarkdown source={note.content} />
        </StyledNote>
    );
}

export default Note;