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

// type resourceType = {
//     [key: string]: string,
// };

const Home = () => {

    //Manage State
    const [response, setResponse] = useState<inside1>();
    document.title = `${response?.name?.first}`;

    //Useeffect
    useEffect(() => {
        callAPI();
    }, [])

    //Function
    const callAPI = async () => {
        try {
            let res = await MiddleService.getData({ url: 'https://randomuser.me/api' });
            setResponse(res?.results[0]);
            // let favicon = document.getElementById("favicon");
            // console.log(favicon)
            // favicon.href = `${response?.picture?.large}`;
            // <link rel="icon" href={response?.picture?.large}></link>
        }
        catch (e) {
            console.log("Error :- ", e);
        }
    }

    return (
        <>
            <div className="main">
                {
                    response?.picture?.large && (
                        <>
                            <div className='image justify-center'>
                                <img src={response?.picture?.large} alt="Avatar" />
                            </div>
                        </>
                    )
                }

                <div className="sec-2 ">
                    <div className='justify-center'>{response?.name?.title} {response?.name?.first} {response?.name?.last}</div>
                    <div className='justify-center'>({response?.login?.username})</div>
                </div>

                <div>
                    <label htmlFor="password">Email</label>
                    <div className="sec-2">{response?.email}</div>
                </div>

                <div className='justify-between'>
                    <div>
                        <label htmlFor="password">Gender</label>
                        <div className="sec-2">{response?.gender}</div>
                    </div>
                </div>

                <div className='justify-between'>
                    <div>
                        <label htmlFor="password">DOB</label>
                        <div className="sec-2">{response?.dob?.date ? response?.dob?.date?.split("T")[0] : ''}</div>
                    </div>
                    <div className='w-30'>
                        <label htmlFor="password">Age</label>
                        <div className="sec-2">{response?.dob?.age}</div>
                    </div>
                </div>

                <div className='justify-between'>
                    <div>
                        <label htmlFor="password">Phone</label>
                        <div className="sec-2">{response?.phone}</div>
                    </div>
                    <div className='w-30'>
                        <label htmlFor="password">Cell</label>
                        <div className="sec-2">{response?.cell}</div>
                    </div>
                </div>

                <div >
                    <label htmlFor="password">Timezone</label>
                    <div className="sec-2">{response?.location?.timezone?.description}</div>
                </div>

                <div>
                    <label htmlFor="password">Address</label>
                    <div className="sec-2">{response?.location?.street?.name} {response?.location?.city} {response?.location?.state} {response?.location?.country} ({response?.location?.postcode})</div>
                </div>

                <button onClick={callAPI} className="nextButton">Refresh</button>
            </div>

        </>
    )
}

export default Home;