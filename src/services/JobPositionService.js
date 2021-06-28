import axios from 'axios';

export const getJobPositons = async (isActive) => {
    
    let {data} = await axios.get("http://localhost:5000/api/jobposition/getActiveJobPosition?isActive=" + isActive);
    return data;
}