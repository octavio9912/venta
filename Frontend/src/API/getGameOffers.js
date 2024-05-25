import NewInstance from './baseAPI';
const endpoint= 'offers/get-game-offers';


const getGames = async () => {
   
	const response = await NewInstance.get(endpoint);
    console.log(response);
    return response;
};

export default getGames;