import axiosClient from "../axiosClient";
import { urls } from "../urls";


const scheduleApi = {
    getAll (id){
        return axiosClient.get(`${urls.GETALL_SCHEDULE}/${id}`);
    },
    getDaily (batchId,day){
        return axiosClient.get(`${urls.GETALL_SCHEDULE}/${batchId}/${day}`);
    },
    generate (id){
        return axiosClient.get(`${urls.GENERATE_SCHEDULE_BYBATCH}/${id}`);
    },
    save(params) {
        return axiosClient.post(`${urls.SCHEDULE_SAVE}`, params);
    },
};

export default scheduleApi;