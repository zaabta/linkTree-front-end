const API_ROOT = process.env.REACT_APP_API_URL;
console.log("TEST API", API_ROOT)


const API_URLS = (extraData) => ({
    ROOT: API_ROOT,
    AUTH: {
        SIGNUP: API_ROOT + "/users/"+ "signup",
        SIGNIN: API_ROOT + "/users/"+ "signin"
    } 
})


export default API_URLS