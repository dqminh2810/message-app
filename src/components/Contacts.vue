<template>
    <div class="contacts">
        <p>This is a list of contacts</p>
        <Contact v-for="currentContact in contacts" :key="currentContact.id" :contact="currentContact"/>
    </div>
</template>

<script>
    import Contact from "./Contact";
    export default {
        name: "Contacts",
        components: {Contact},
        computed: {
            contacts(){
                return this.$store.getters.contactsList;
            }
        },
        created() {
            this.$store.dispatch("loadContactsUrl");
        },
    }
</script>

<style scoped>
    p {
        color: blue
    }
    .contacts {
        border: solid blue;
        margin: 20px
    }
</style>
