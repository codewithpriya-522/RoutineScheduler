import axiosClient from "../axiosClient";
import { urls } from "../urls";


const scheduleApi = {
    getAll (id){
        return axiosClient.get(`${urls.GETALL_SCHEDULE}/${id}`);
    },
};

export default scheduleApi;