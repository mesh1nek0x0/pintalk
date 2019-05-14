import React, { FC } from 'react';
import MyHeader from '../../components/MyHeader';

const Home: FC = () => {
    return (
        <>
            <MyHeader title="Home"/>
            <div className="Home">
                Home Component
            </div>
        </>
    );
};

export default Home;