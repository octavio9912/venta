import NewInstance from './NotLoggedBaseAPI';
const endpoint= 'signin';


const signin = async (mail,completeName, password, creditCard, expirationDate, ccv) => {
   
    const data = {
        mail: mail,
        completeName: completeName,
        password: password,
        creditCard: creditCard,
        expirationDate: expirationDate,
        ccv: ccv
    };

	const response = await NewInstance.post(endpoint, data);
    console.log(response);
    return response;
};

export default signin;