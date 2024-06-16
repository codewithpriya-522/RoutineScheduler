import axiosClient from "../axiosClient";
import { urls } from "../urls";


const teacherApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_TEACHERS}`);
    },
    // refreshlogin(params){
    //     return axiosClient.post(`${urls.REFRESH_LOGIN}`,params)
    // },
    // registration(params)
    // {
    //     return axiosClient.post(`${urls.REGISTRATION}`,params)
    // }
};

export default teacherApi;