import { useMutation } from '@apollo/client';
import React from 'react';
import { withRouter } from 'react-router-dom';
// Импортируем мутацию DELETE_NOTE 
import { DELETE_NOTE } from '../gql/mutation';
// Импортируем запросы для их повторного получения после удаления заметки
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';
import dele from '../img/trash.svg';
import ButtonAsLink from './ButtonAsLink';
 
const DeleteNote = props => {
    const [deleteNote] = useMutation(DELETE_NOTE, {
        variables: {
            id: props.noteId
        },
        // Повторно получаем запросы списка заметок, чтобы обновить кэш
        refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
        onCompleted: data => {
            // Перенаправляем пользователя на страницу "my notes"
            props.history.push('/mynotes');
        }
    });
    return <ButtonAsLink onClick={deleteNote}>Delete <img style={{ verticalAlign: "-8px", width:"23px"}} src={dele} /></ButtonAsLink>;
}
export default withRouter(DeleteNote);