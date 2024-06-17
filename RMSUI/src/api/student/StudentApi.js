import axiosClient from "../axiosClient";
import { urls } from "../urls";


const studentApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_STUDENTS}`);
    },
    // refreshlogin(params){
    //     return axiosClient.post(`${urls.REFRESH_LOGIN}`,params)
    // },
    // registration(params)
    // {
    //     return axiosClient.post(`${urls.REGISTRATION}`,params)
    // }
};

export default studentApi;