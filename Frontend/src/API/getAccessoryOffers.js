import NewInstance from './baseAPI';
const endpoint= 'offers/get-accessory-offers';


const getAccessoryOffers = async () => {
   
	const response = await NewInstance.get(endpoint);
    console.log(response);
    return response;
};

export default getAccessoryOffers;