import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    // const topics = useLoaderData()
    // console.log(topics);
    return (
        <div>
            <h3>You can judge yourself by practacing quiz here!!!</h3>
            <Topics></Topics>
        </div>
    );
};

export default Home;