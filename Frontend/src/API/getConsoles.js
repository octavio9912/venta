import NewInstance from './baseAPI';
const endpoint= 'categories/get-consoles';


const getConsoles = async () => {
   
	const response = await NewInstance.get(endpoint);
    console.log(response);
    return response;
};

export default getConsoles;