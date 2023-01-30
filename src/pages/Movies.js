import React, {useState} from 'react';
import Movie from "../component/Movie"
import MovieForm from '../component/MovieForm';

const Movies = () => {
    const [movies,setMovies]=useState([]);
    const addMovie = (movie) => {
        setMovies([
            ...movies,//기존에 있던것은 전개연산자로 누적
            movie
        ])
    }

    const removeMovie= (id) => {
        setMovies(movies.filter((movie) => {
            return movie.id !==id;
        }))
    }
    const renderMovies = movies.length ? movies.map((movie) => {
    return(
        <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
    )
    }) : '영화를 추가해주세요';
    return (
        <div className='pd'>
            <h1>영화 list</h1>
            <MovieForm addMovie={addMovie}/>
            {renderMovies}
        </div>
    );
};

export default Movies;