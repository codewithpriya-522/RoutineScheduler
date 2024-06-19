import axiosClient from "../axiosClient";
import { urls } from "../urls";


const batchApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_BATCH}`);
    },
    singleGet(params){
        return axiosClient.get(`${urls.SINGLEGET_BATCH}/${params}`)
    },
    update(params)
    {
        return axiosClient.put(`${urls.SINGLEGET_BATCH}`,params)
    }
};

export default batchApi;