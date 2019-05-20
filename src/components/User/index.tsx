import React, { FC } from 'react';
import { List } from 'semantic-ui-react';
import { UserList } from '../User/UserList';
import MyHeader from '../MyHeader';

const ids = Object.keys(UserList);

const User: FC<{}> = () => {
    return (
        <>
            <MyHeader />
            <div className="users">
                Users Component
            </div>
            <List as="ul">
                {ids.map(id => (
                    <List.Item as="li" key={id}>
                        <p>No.{id}</p>
                        {UserList[id].name && <p>{UserList[id].name}</p>}
                        <p>{UserList[id].age}</p>
                        <p>{UserList[id].nickname}</p>
                    </List.Item>
                ))}
            </List>
        </>
    )
};

export default User;