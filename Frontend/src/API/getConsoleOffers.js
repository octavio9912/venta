import NewInstance from './baseAPI';
const endpoint= 'offers/get-console-offers';


const getConsoleOffers = async () => {
   
	const response = await NewInstance.get(endpoint);
    console.log(response);
    return response;
};

export default getConsoleOffers;