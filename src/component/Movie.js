import React from 'react';

const Movie = ({movie,removeMovie}) => {//여기서 ({movie})는 구조분해할당
    return (
        <div className="movie">
            <div className="movie-title">{movie.title}
                <span className="movie-year">{movie.year}</span>
            </div>
            <div><button className='d-btn' onClick={() => removeMovie(movie.id)}>삭제</button></div>
        </div>
    );
};

export default Movie;