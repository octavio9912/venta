import NewInstance from './NotLoggedBaseAPI';
const loginEP= 'login';


const login = async (mail, password) => {
   
    const data = {
        mail: mail,
        password: password
    };

	const response = await NewInstance.post(loginEP, data);
    console.log(response);
    return response;
};

export default login;