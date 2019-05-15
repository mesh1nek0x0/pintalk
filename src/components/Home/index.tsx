import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Header, List } from 'semantic-ui-react';
import MyHeader from '../../components/MyHeader';
import MyFooter from '../../components/MyFooter';
import { NavigationLinkData } from './LinkList';

const codes = Object.keys(NavigationLinkData);

const Home: FC = () => {
    return (
        <>
            <MyHeader title="Home"/>
            <div className="Home">
                Home Component
            </div>
            <Header as="h2" content="Navigation Links"/>
            <List as="ul">
                {codes.map(code => (
                    <List.Item as="li" key={code}>
                        <Link to={NavigationLinkData[code].url}>{NavigationLinkData[code].name}</Link>
                    </List.Item>
                ))}
            </List>
            <MyFooter />
        </>
    );
};

export default Home;