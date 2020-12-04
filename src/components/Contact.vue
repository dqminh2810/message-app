<template>
    <div class="contact">
        <div id="profile_img">
            <img v-bind:src="contact.profileImage"/>
        </div>

        <div id="block">
            <div id="first">
                <div id="contact_name">
                    {{contact.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        props: {
            contact: Object
        },
    }
</script>

<style scoped>
    .contact {
        border: solid green;
        margin: 100px;
        text-align: left;
    }
    #profile_img {
        float: left;
        margin-right: 30px;
    }
    img {
        border-radius: 60%;
        max-width: 100px;
        max-height: 100px;
    }
    #contact_name {
        font-weight: bold;
        font-size: large;
    }
    #contact_name
    {
        display:inline;
    }
</style>
