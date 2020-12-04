
    import {createMemoryHistory, createRouter} from 'vue-router'
    import Home from '../components/Home.vue'
    import Contacts from '../components/Contacts.vue'
    import Messages from '../components/Messages.vue'
    import Test from '../components/test/ParentComponent.vue'

    const routes = [
        {path: '/', component: Home},
        {path: '/home', component: Home},
        {path: '/messages', component: Messages},
        {path: '/contacts', component: Contacts},
        {path: '/test', component: Test}
    ];

    const router = createRouter({
        history: createMemoryHistory(),
        routes,
    });

    export default router;


