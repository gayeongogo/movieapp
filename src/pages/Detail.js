import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./Detail.scss"

const Detail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true); //시작할땐 로딩 돌아감
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`) //파라미터 값 연결
        ).json(); //json형식으로 받을 것
        setMovie(json.data.movie) //바뀌는 값은 json data의 movie
        setLoading(false) //json data 들어오면 로딩 끝(사라짐)
    }
    useEffect(() => {
        getMovie(); //불러냄(시작하자마자 실행)
    })

    return (
        <div className='movie-detail'>
            {loading ? (
                <div className='loader-area'><div className='loader'></div></div>
            ) : (
                <div className='movies-area'>
                    <h2 className='title'>{movie.slug}</h2>
                    <div className="movies">
                        <div className='movies-main'>
                            <div className="img-box">
                                <img src={movie.large_cover_image} alt={movie.title} />
                            </div>
                        </div >
                        <div className="movies-content">
                            <div className="info">
                                <span className="movie-title">{movie.title}</span>
                                <span className="movie-rating">Rating : {movie.rating}</span>
                                <span className="movie-runtime">Running Time : {movie.runtime}</span>
                            </div>
                            <div className="genres">
                                <span className='genre'>Genre :&nbsp;</span> 
                                <ul className="list">
                                    {
                                        movie.genres.map((genre, idx) => <li key={idx}>{genre}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="summarys">
                                <p className="summary">{movie.description_full}</p>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </div>
    );
};

export default Detail;