const contactsUrl = "https://io-labs.fr/messenger/contacts.json";
const axios = require('axios');
export const contactsModules = {
    namespace: false,
    state(){
        return {
            contactsList: [],
        }
    },
    getters:{
        contactsList: (state) => {
            return state.contactsList;
        },
    },
    mutations:{
        setContacts: (state, payload)=> state.contactsList = payload.contactsList
    },
    actions: {
        async loadContactsUrl(context){
            try{
                const response = await axios.get(contactsUrl);
                console.log(response);
                context.commit('setContacts', {contactsList: response.data});
            }catch (e) {
                console.log("error: ", e);
            }
        }
    }
};
