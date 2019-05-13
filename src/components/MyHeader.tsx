import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const MyHeader: React.FC = () => {
    return (
        <Segment clearing>
            <Header as='h2' floated='left' icon='talk' content='Pintalk' />
            <Header as='h3' floated='right' content='Login' />
        </Segment>
    );
}

export default MyHeader;