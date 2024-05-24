import NewInstance from './baseAPI';
const endpoint= 'categories/get-accessories';


const getAccessories = async () => {
   
	const response = await NewInstance.get(endpoint);
    console.log(response);
    return response;
};

export default getAccessories;