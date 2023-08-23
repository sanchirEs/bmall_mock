import axios from "axios"

const instance = axios.create({
    baseURL: "https://bmall-mock-default-rtdb.firebaseio.com/"
})

export default instance;