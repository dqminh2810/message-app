<template>
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agreed: {{agreed}}, Disagreed: {{disagreed}}</h3>
    <app-voter v-for="voter in voters" :key="voter.id" :name="voter" @agreed:="onVote"/>
</template>

<script>
    import AppVoter from "./VoterComponent";
    export default {
        name: "app-vote-taker",
        components: {AppVoter},
        data: function() {
            return {
                agreed: 0,
                disagreed: 0,
                voters: ['Narco', 'Celeritas', 'Bombasto']
            }
        },
        methods: {
            onVote(agreed){
                agreed ? this.agreed++ : this.disagreed++
            }
        }
    }
</script>

<style scoped>
    /* Some style definition*/
</style>



