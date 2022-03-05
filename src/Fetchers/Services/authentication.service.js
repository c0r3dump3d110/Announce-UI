import axiosFetcher from "../axiosFetcher";

class AuthServices {

    Login = (email, password) => {
        return axiosFetcher.post("/Login", {
            email : email, 
            password : password
        }).then(res => {
            console.log(res); 
            if(res.data.token){
                localStorage.setItem('user', res.data); 
            }

            return res.data; 
        }).catch(err => {
            console.log(err); 
        })
    }

    Logout = () => {
        sessionStorage.removeItem('token'); 
    }

    Register = () => {
        return axiosFetcher.post('/register', {
            // insert data of organisation 
        })
    }
    
    
}

export default AuthServices; 