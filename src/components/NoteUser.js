import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { GET_ME } from '../gql/query';
import hammer from '../img/hammer.svg';
import DeleteNote from './DeleteNote';
import FavoriteNote from './FavoriteNote';

const NoteUser = props => {
  const { loading, error, data } = useQuery(GET_ME);
  // Если данные загружаются, выдаем сообщение о загрузке
  if (loading) return <p>Loading...</p>;
  // Если при получении данных произошел сбой, выдаем сообщение об ошибке
  if (error) return <p>Error!</p>;
  return (
    <React.Fragment>
      {data.me.id === props.note.author.id && (
        <React.Fragment>
          <DeleteNote noteId={props.note.id} />{' '}
          <Link to={`/edit/${props.note.id}`}>
            Edit <img style={{ width: '27px' }} src={hammer} />
          </Link>{' '}
        </React.Fragment>
      )}
      <FavoriteNote
        me={data.me}
        noteId={props.note.id}
        favoriteCount={props.note.favoriteCount}
      />
    </React.Fragment>
  );
};

export default NoteUser;
