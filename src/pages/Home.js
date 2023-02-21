import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='bg'>
                    <div className='home-Title'>
                        <p className='title1'>Let's Try</p>
                        <p className='title2'>MOVIE APP!</p>
                        <p className='title3'>We Made Movie App Yeah</p>
                    </div>
                    <div className='home-img'>
                        <Link to="../movies">TRY NOW</Link>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Home;