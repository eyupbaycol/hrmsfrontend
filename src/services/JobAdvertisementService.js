import axios from 'axios';


export const getJobAdvertiesmentList = async (isActive) => {
    const { data: { data } } = await axios.get("http://localhost:5000/api/jobadvertisement/getActiveAdversitements?isActive=" + isActive)
    return data;
}


export const updateAdvertisementActivation = async (id, isActive) => {
    const { data } = await axios.get(`http://localhost:5000/api/jobadvertisement/updateAdvertisementActivate?id=${id}&isActive=${isActive}`)
    return data;
}


export const addAdvertisement = async (advertisement) => {
    const { data} = await axios.post("http://localhost:5000/api/jobadvertisement/addAdvertisement", advertisement);
    return data
}

export const addAdvertisementImage = async (image, id) => {
    const {data} = await axios.post("http://localhost:5000/api/jobadvertisement/addAdvertisementImage?id=" + id, image)
    return data
}