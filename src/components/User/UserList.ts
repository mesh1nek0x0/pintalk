interface User {
    name?: string;
    age: number;
    nickname: string;
}

export interface Users {
    [id:string] : User
}

export const UserList: Users = {
    '1' : {
       name: 'macaron',
       age: 19,
       nickname: 'まかろん'
    },
    '2' : {
        name: 'cherry',
        age: 19,
        nickname: 'ちぇりー'
     },
     '3' : {
        age: 15,
        nickname: 'なぞこ'
     }
}