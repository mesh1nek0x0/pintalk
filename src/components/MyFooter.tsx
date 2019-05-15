import React, { FC } from 'react';
import { Header, Segment } from 'semantic-ui-react';

const MyFooter:React.FC<{}> = () => (
    <>
        <Segment>
            <Header as='h4' textAlign='center'>
                (C)mesh1nek0x0 
            </Header>
        </Segment>
    </>
);

export default MyFooter;
