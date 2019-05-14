import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';

export interface MyHeaderProps {
    title?: string;
}

const MyHeader: React.FC<MyHeaderProps> = ({
    title = 'unknown'
}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Segment clearing>
                <Header as='h2' floated='left' icon='talk' content='Pintalk' />
                <Header as='h3' floated='right' content='Login' />
            </Segment>
        </>
    );
}

export default MyHeader;