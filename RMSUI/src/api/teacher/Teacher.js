import axiosClient from "../axiosClient";
import { urls } from "../urls";


const teacherApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_TEACHERS}`);
    },
    singleGet(params){
        return axiosClient.get(`${urls.SINGLEGET_TEACHERS}/${params}`)
    },
    update(params)
    {
        return axiosClient.put(`${urls.SINGLEGET_TEACHERS}`,params)
    }
};

export default teacherApi;