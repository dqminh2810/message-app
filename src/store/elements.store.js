

    const elementsUrl = "https://io-labs.fr/messenger/elements.json";
    const axios = require('axios');
    export const elementsModules = {
        namespace: false,
        state(){
            return {
                elementsList: [],
            }
        },
        getters:{
            elementsList: (state) => {
                return state.elementsList;
            },
        },
        mutations:{
            setElements: (state, payload)=> state.elementsList = payload.elementsList,
            increment: state.elementsList.forEach(element => element.value++)
        },
        actions: {
            async loadElementsUrl(context){
                try{
                    const response = await axios.get(elementsUrl);
                    console.log(response);
                    context.commit('setElements', {elementsList: response.data});
                }catch (e) {
                    console.log("error: ", e);
                }
            }
        }
    };



