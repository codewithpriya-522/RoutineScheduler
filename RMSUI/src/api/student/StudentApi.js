import axiosClient from "../axiosClient";
import { urls } from "../urls";


const studentApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_STUDENTS}`);
    },
    singleGet(params){
        return axiosClient.get(`${urls.SINGLEGET_STUDENTS}/${params}`)
    },
    update(params)
    {
        return axiosClient.put(`${urls.SINGLEGET_STUDENTS}`,params)
    }
};

export default studentApi;