import axios from 'axios';

type props = {
    url: string
}

class MiddleService {

    getData = async ({ url }: props) => {
        try {
            let response = await axios.get(url);
            return response?.data;
        }   
        catch (e) {
            console.log("Error :- ", e);
        }
    }

}

const instance = new MiddleService();

export default instance;
