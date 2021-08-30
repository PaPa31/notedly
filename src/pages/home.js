import { useQuery } from '@apollo/client';
import React from 'react';
import Button from '../components/Button';
import NoteFeed from '../components/NoteFeed';
import { GET_NOTES } from '../gql/query';


const Home = () => {
    // Хук запроса
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

    // Если данные загружаются, отображаем сообщение о загрузке
    if (loading) return <p>Loading...</p>;

    // Если при получении данных произошел сбой, отображаем сообщение об ошибке
    if (error) return <p>Error!</p>;

    // Если получение данных произошло успешно, отображаем их в UI
    return (
        // Добавляем элемент <React.Fragment>, чтобы предоставить
        // родительский элемент
        <React.Fragment>
            <NoteFeed notes={data.noteFeed.notes} />
            {/* Only display the Load More button if hasNextPage is true */}
            {data.noteFeed.hasNextPage && (
                // onClick выполняет запрос, передавая в качестве переменной текущий курсор
                <Button
                    onClick={() =>
                        fetchMore({
                            variables: {
                                cursor: data.noteFeed.cursor
                            },
                            updateQuery: (previousResult, { fetchMoreResult }) => {
                                return {
                                    noteFeed: {
                                        cursor: fetchMoreResult.noteFeed.cursor,
                                        hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                                        // Совмещаем новые результаты со старыми
                                        notes: [
                                            ...previousResult.noteFeed.notes,
                                            ...fetchMoreResult.noteFeed.notes
                                        ],
                                        __typename: 'noteFeed'
                                    }
                                };
                            }
                        })
                    }
                >
                    🛒 Load more
                </Button>
            )}
        </React.Fragment>
    );
}
 export default Home;
