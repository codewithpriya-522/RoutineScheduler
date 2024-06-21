import axiosClient from "../axiosClient";
import { urls } from "../urls";


const scheduleApi = {
    getAll (id){
        return axiosClient.get(`${urls.GETALL_SCHEDULE}/${id}`);
    },
    generate (id){
        return axiosClient.get(`${urls.GENERATE_SCHEDULE_BYBATCH}/${id}`);
    },
};

export default scheduleApi;