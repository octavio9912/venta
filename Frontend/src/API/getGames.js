import NewInstance from './baseAPI';
const endpoint= 'categories/get-games';


const getGames = async () => {
   
	const response = await NewInstance.get(endpoint);
    console.log(response);
    return response;
};

export default getGames;