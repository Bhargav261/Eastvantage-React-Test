import React, { useEffect, useState } from 'react';
import MiddleService from './Common/MiddleService';

type inside1 = {
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

// type resourceType = {
//     [key: string]: string,
// };

const Home = () => {

    //Manage State
    const [response, setResponse] = useState<inside1>();
    document.title = "Bhargav";

    //Useeffect
    useEffect(() => {
        callAPI();
    }, [])

    //Function
    const callAPI = async () => {
        try {
            let res = await MiddleService.getData({ url: 'https://randomuser.me/api' });
            setResponse(res?.results[0]);
        }
        catch (e) {
            console.log("Error :- ", e);
        }
    }

    return (
        <>
            Home
            <button onClick={callAPI} >Next</button>

            {/* <div>{response?.phone}</div> */}

            <div>{response?.name?.title} {response?.name?.first} {response?.name?.last}</div>
            <div>{response?.gender}</div>
            <div>{response?.location?.street?.name} {response?.location?.city} {response?.location?.state} {response?.location?.country} ({response?.location?.postcode})</div>
            <div>{response?.email}</div>
            <div>{response?.login?.username}</div>
            <div>{response?.login?.password}</div>
            <div>{response?.dob?.date}</div>
            <div>{response?.dob?.age}</div>
            <div>{response?.registered?.date}</div>
            <div>{response?.registered?.age}</div>
            <div>{response?.phone}</div>
            <div>{response?.cell}</div>
            <div><img src={response?.picture?.large} /></div>
            <div><img src={response?.picture?.medium} /></div>
            <div><img src={response?.picture?.thumbnail} /> </div>
            {/* <div>{response?.results?.[0]?.phone}</div> */}

            {/* <div>{response?.results[0]?.name?.title}</div> */}
        </>
    )
}

export default Home;