import NewInstance from "./NotLoggedBaseAPI";
const contactEP = '/contact';

const sendForm = async (name, mail, suggestion) => {
    const data = {
        name: name,
        mail: mail,
        suggestion: suggestion
    }

    const response = await NewInstance.post(contactEP, data);
    console.log(response);
    return response;
}
export default sendForm;