import axiosFetcher from "../../../axiosFetcher";
import authHeader from "../../authheader";


class UserService {
    getAnnounces() {
        return axiosFetcher.get('/annonces' + 'user', {headers: authHeader()})
    }

    addAnnounce({announceObject}) {
        return axiosFetcher.post('/addannonce' + 'user', 
            {
                token: authHeader(),
                data: announceObject,
            }
        ).then(res => {
            console.log(res.data); 
        })
    }
}