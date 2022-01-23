import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';

const App: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleGetData = async () => {
      const _movies = await getMoviesFromApiAsync();
      setMovies(_movies);
    };
    handleGetData();
  }, []);

  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://facebook.github.io/react-native/movies.json',
      );
      const responseJSON = await response.json();
      return responseJSON.movies;
    } catch (error) {
      console.error(error);
    }
  };

  const _renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => {}}>
      <Text>
        {item.id} - {item.title} - {item.releaseYear}
      </Text>
    </TouchableOpacity>
  );

  return <FlatList data={movies} renderItem={_renderItem} />;
};

export default App;
