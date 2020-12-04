import {messagesMock} from "../mocks/messages.mock.js";

const messagesUrl = "https://io-labs.fr/messenger/messages.json";
const axios = require('axios');
export const messagesModules = {
    namespace: false,
    state(){
        return {
            messagesList: [],
        }
    },
    getters:{
        numberOfUnreadMessages: (state) => {
            var unreadMessage = [];
            state.messagesList.forEach(message => {
                if(message.read === false) unreadMessage.push(message);
            });
            //console.log(state.messagesList);
            return unreadMessage.length;
        },
        sortMessagesByDate: (state) => {
            return state.messagesList.sort((m1, m2) => {return new Date(m2.date) - new Date(m1.date)})
        }
    },
    mutations:{
        setMessages: (state, payload)=> state.messagesList = payload.messagesList,
    },
    actions: {
        async loadMessagesMock(context){
            let messagesList = [];
            messagesMock.forEach(message => messagesList.push(message));
            context.commit('setMessages', {messagesList: messagesList});
            return messagesList;
        },
        async loadMessagesUrl(context){
            try{
                const response = await axios.get(messagesUrl);
                console.log(response);
                context.commit('setMessages', {messagesList: response.data});

            }catch (e) {
                console.log("error: ", e);
            }
        },
    }
};
