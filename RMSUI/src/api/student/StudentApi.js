import axiosClient from "../axiosClient";
import { urls } from "../urls";


const studentApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_STUDENTS}`);
    },
    singleGet(params){
        return axiosClient.get(`${urls.SINGLEGET_STUDENTS}/${params}`)
    },
    // registration(params)
    // {
    //     return axiosClient.post(`${urls.REGISTRATION}`,params)
    // }
};

export default studentApi;