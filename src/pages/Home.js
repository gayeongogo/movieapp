import { useState, useEffect } from 'react';
import axios from 'axios';
import HomeMovies from '../component/HomeMovies'
import './Home.scss'

const Home = () => {
    const [isLoading, setIsLoading] =useState(true);
    const [movies, setMovies]=useState([]);
   

   const getMovies= async() => {
        const {data: {
            data: {movies},
        }}=await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        console.log(movies);
        setIsLoading(false);
        setMovies(movies)
    }
    useEffect(() => {
       getMovies() 
    },[])
    return (
        <section className='container'>
        {
            isLoading ? (
            <div className='loader-area'><div className='loader'></div></div>
            ) : ( 
            <div className='movies'>
                {movies.map( movie => (
                    <HomeMovies
                        key={movie.id}  
                        id={movie.id} 
                        year={movie.year} 
                        title={movie.title} 
                        summary={movie.summary} 
                        poster={movie.medium_cover_image}
                        genres={movie.genres}
                    />
                ))
            }
            </div>
        )
        }
        </section>
    );
};

export default Home;