<template>
    <div class="menu">
        <p>This is a menu bar</p>
        <i class="fas fa-sms">{{unreadMessages}}</i>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        props: {
        },
        computed:{
            unreadMessages(){
                return this.$store.getters.numberOfUnreadMessages;
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    p {
        color: red
    }

    .menu {
        border: solid red;
        margin: 20px
    }
</style>
