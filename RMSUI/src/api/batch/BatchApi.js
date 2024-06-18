import axiosClient from "../axiosClient";
import { urls } from "../urls";


const batchApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_BATCH}`);
    },
    singleGet(params){
        return axiosClient.get(`${urls.SINGLEGET_BATCH}/${params}`)
    },
    // registration(params)
    // {
    //     return axiosClient.post(`${urls.REGISTRATION}`,params)
    // }
};

export default batchApi;