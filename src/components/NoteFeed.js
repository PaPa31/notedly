import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Note from './Note';

const NoteWrapper = styled.div`
    max-width: 800px;
    padding-bottom: 2em;
    margin-bottom: 2em;
    border-bottom: 1px solid #394045;
`

const NoteFeed = ({ notes }) => {
    return (
        <div>
            {notes.map(note => (
                <NoteWrapper key={note.id}>
                    <Note note={note} />
                    <Link to={`note/${note.id}`}>Permalink 🔍</Link>
                </NoteWrapper>
            ))}
        </div>
    );
}
 export default NoteFeed;
