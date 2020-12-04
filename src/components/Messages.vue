<template>
    <div class="messages">
        <p>This is a list of messages</p>
        <Message v-for="currentMessage in messages" :key="currentMessage.id" :message="currentMessage"/>

    </div>
</template>

<script>
    import Message from "./Message";
    export default {
        name: "Messages",
        components: {Message},
        computed: {
            messages(){
                return this.$store.getters.sortMessagesByDate;
            }
        },
        created() {
            this.$store.dispatch("loadMessagesUrl");
        },
    }
</script>

<style scoped>
    p {
        color: blue
    }
    .messages {
        border: solid blue;
        margin: 20px
    }
</style>
