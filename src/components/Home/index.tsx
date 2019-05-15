import React, { FC } from 'react';
import MyHeader from '../../components/MyHeader';
import MyFooter from '../../components/MyFooter';

const Home: FC = () => {
    return (
        <>
            <MyHeader title="Home"/>
            <div className="Home">
                Home Component
            </div>
            <MyFooter />
        </>
    );
};

export default Home;