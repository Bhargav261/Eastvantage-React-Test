import Image from './Common/Image';
import Button from './Common/Button';
import Details from './Common/Details';
import { detailsType } from './Common/Model';
import React, { useEffect, useState, useCallback } from 'react';
import MiddleService from './Common/MiddleService';

const Home = () => {

    //Manage State
    const [response, setResponse] = useState<detailsType>();
    document.title = `${response?.name?.first}`;

    //Useeffect
    useEffect(() => {
        callAPI();
    }, [])

    //Function
    const callAPI = useCallback(async () => {
        try {
            let res = await MiddleService.getData({ url: 'https://randomuser.me/api' });
            setResponse(res?.results[0]);
        }
        catch (e) {
            console.log("Error :- ", e);
        }
    }, [])

    return (
        <>
            <div className="main">
                {
                    response?.picture?.large && (
                        <>
                            <div className='image justify-center'>
                                <Image src={response?.picture?.large} />
                            </div>
                        </>
                    )
                }

                <div className="sec-2 ">
                    <Details clName='justify-center' value={`${response?.name?.title} ${response?.name?.first} ${response?.name?.last}`} />
                    <Details clName='justify-center' value={`${response?.login?.username}`} />
                </div>

                <Details label="Email" value={`${response?.email}`} />
                <Details label="Gender" value={`${response?.gender}`} />

                <div className='justify-between'>
                    <Details label="DOB" value={`${response?.dob?.date ? response?.dob?.date?.split("T")[0] : ''}`} />
                    <Details clName='w-30' label="Age" value={`${response?.dob?.age}`} />

                </div>

                <div className='justify-between'>
                    <Details label="Phone" value={`${response?.phone}`} />
                    <Details clName='w-30' label="Cell" value={`${response?.cell}`} />
                </div>

                <Details label="Timezone" value={`${response?.location?.timezone?.description}`} />
                <Details label="Address" value={`${response?.location?.street?.name}`} />

                <Button onClick={callAPI} value="Refresh" />
            </div>

        </>
    )
}

export default Home;