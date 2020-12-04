<template>
    <div class="home">
        <p>This is home page</p>
        <!--<HelloWorld :msg="'Welcome to Your Vue.JS App'"/>-->
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Home",
        props: {
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p {
        color: blue
    }
    .home {
        border: solid blue;
        margin: 20px
    }
</style>
