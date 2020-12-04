

    import {createStore} from 'vuex';
        import {messagesModules} from './messages.store.js'
        import {contactsModules} from './contacts.store.js'
        import {elementsModules} from "./elements.store";

        export default createStore({
            namespace: false,
            modules: {
                messagesModules: messagesModules,
                contactsModules: contactsModules,
                elementsModules: elementsModules
            }
        });



