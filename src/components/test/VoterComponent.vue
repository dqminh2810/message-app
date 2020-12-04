<template>
    <h4>{{name}}</h4>
    <button v-on:click="vote(true)">Agree</button>
    <button v-on:click="vote(false)">Disagree</button>
</template>

<script>
    export default {
        name: "app-voter",
        props: {
            name: String,
            voted: Boolean
        },
        data: function () {
            return {
                didVote: false
            }
        },
        methods: {
            vote(agreed){
                this.$emit('agreed', agreed);
                this.didVote = true;
            }
        }
    }
</script>

<style scoped>
    /* Some style definition*/
</style>
