import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics.data);
    return (
        <div className='container'>
            <div className='row'>
                {topics.data.map(topic => <div key={topic.id} className='col-3'>
                    <div className="card" style={{ width: "16rem" }}>
                        <img src={topic.logo} className="card-img-top" alt="..." />
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <h5 className="card-title">{topic.name}</h5>
                            <Link to={`/topic/${topic.id}`} className="btn btn-primary">Start practice</Link>
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default Topics;