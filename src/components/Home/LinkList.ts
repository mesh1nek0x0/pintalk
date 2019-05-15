interface AnchorLink {
    url: string;
    name: string;
}

export interface Links {
    [code:string] : AnchorLink
}

export const NavigationLinkData: Links = {
    user: {
        url: '/users',
        name: 'User List'
    },
    talk: {
        url: '/talks',
        name: 'Talk List'
    },
    notFound: {
        url: '/404',
        name: 'Forbidden'
    },
    top: {
        url: '/',
        name: 'Home'
    }
}