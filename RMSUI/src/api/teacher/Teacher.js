import axiosClient from "../axiosClient";
import { urls } from "../urls";


const teacherApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_TEACHERS}`);
    },
    singleGet(params){
        return axiosClient.get(`${urls.SINGLEGET_TEACHERS}/${params}`)
    },
    // registration(params)
    // {
    //     return axiosClient.post(`${urls.REGISTRATION}`,params)
    // }
};

export default teacherApi;