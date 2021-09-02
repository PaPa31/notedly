import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
// Импортируем мутацию TOGGLE_FAVORITE
import { TOGGLE_FAVORITE } from '../gql/mutation';
// Добавляем запрос GET_MY_FAVORITES для его повторного получения
import { GET_MY_FAVORITES } from '../gql/query';
import ButtonAsLink from './ButtonAsLink';


const FavoriteNote = props => {
    // Сохраняем число избранных заметок пользователя как состояние
    const [count, setCount] = useState(props.favoriteCount);
    // Если пользователь отметил заметку как избранную, сохраняем 
    // это как состояние
    const [favorited, setFavorited] = useState(
        // Проверяем, присутствует ли заметка в списке избранных
        props.me.favorites.filter(note => note.id === props.noteId).length > 0
    );

    //Хук мутации toggleFavorite
    const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, { 
        variables: {
            id: props.noteId
        },
        // Повторно получаем запрос GET_MY_FAVORITES для обновления кэша
        refetchQueries: [{ query: GET_MY_FAVORITES }]
    });
    // Если пользователь добавил заметку в избранное, отображаем
    // вариант ее удаления из списка.
    // В противном случае отображаем вариант ее добавления

    return (
        <React.Fragment>
            {favorited ? (
                <ButtonAsLink
                    onClick={() => {
                        toggleFavorite();
                        setFavorited(false);
                        setCount(count - 1);
                    }}
                >
                    Remove Favorite  <span aria-hidden="true" role="img">👎</span> {" "}
                </ButtonAsLink>
            ) : (
                    <ButtonAsLink
                        onClick={() => {
                            toggleFavorite();
                            setFavorited(true);
                            setCount(count + 1);
                        }}
                    >
                        Add Favorite <span aria-hidden="true" role="img">👍</span> {" "}
                    </ButtonAsLink>
                )}
                : {count}
        </React.Fragment>
    );
}
export default FavoriteNote;