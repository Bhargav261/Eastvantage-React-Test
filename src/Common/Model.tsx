
// type resourceType = {
//     [key: string]: string,
// };

export type detailsType = {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        street: {
            number: number,
            name: string,
        },
        city: string,
        state: string,
        country: string,
        postcode: string,
        coordinates: {
            latitude: string,
            longitude: string
        },
        email: string,
        timezone: {
            description: string
        },
    },
    email: string,
    dob: {
        age: number,
        date: string
    },
    login: {
        username: string
        password: string
    },
    phone: string,
    cell: string
    registered: {
        age: number,
        date: string
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string,
    }

}