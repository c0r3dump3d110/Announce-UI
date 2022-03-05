import axios from 'axios'; 

export default axios.create({
    baseURL: "http://0.0.0.0:8080/SMART_WALK-1.0-SNAPSHOT",
    headers: {
        "Content-Type": "application/json"
    }
})
