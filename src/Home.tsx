import React, { useEffect, useState } from 'react';
import MiddleService from './Common/MiddleService';

const Home = () => {

    //Manage State
    const [response, setResponse] = useState<object>({});

    //Useeffect
    useEffect(() => {
        callAPI();
    }, [])

    //Function
    const callAPI = async () => {
        try {
            let response = await MiddleService.getData({ url: 'https://randomuser.me/api' });
            let data =response;
            setResponse(data);
            console.log("data: - ", data)
        }
        catch (e) {
            console.log("Error :- ", e);
        }
    }

    return (
        <>
            Home
            <button onClick={callAPI} >Refresh</button>
        </>
    )
}

export default Home;