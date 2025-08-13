
import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params:{
        api_key : "32775d392a2198ab24737e055f1c1f72",
        language : "ko-KR"
    }
});

export default instance;