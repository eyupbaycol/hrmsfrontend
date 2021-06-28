
import axios from "axios";


export const getCityList = async () => {
    let { data: { data } } = await axios.get("http://localhost:5000/api/city/getCities");
    return data;
}
