<template>
    <div class="message" v-on:click="markAsRead(message)">
        <div id="sender_img">
            <img v-bind:src="message.sender.profileImage"/>
        </div>

        <div id="block">
            <div id="first">
                <div id="sender_name">
                    {{message.sender.name}}
                </div>
                <div id="time">
                    {{new Date(message.date).toLocaleTimeString()}}
                </div>
            </div>


            <div id="second">
                <div id="content">
                    {{message.content}}
                </div>
                <div id="isRead" v-if="message.read">
                    <i class="fas fa-check"></i>
                </div>
                <div id="isUnRead" v-else>
                    <i class="fas fa-envelope-square"></i>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            message: Object
        },
        methods: {
            markAsRead(message){
                message.read = true;
            }
        }
    }
</script>

<style scoped>

    .message {
        border: solid green;
        margin: 50px;
        text-align: left;
    }
    #sender_img {
        float: left;
        margin-right: 30px;
    }
    img {
        border-radius: 60%;
        max-width: 100px;
        max-height: 100px;
    }
    #first {
    }
    #second {
        margin-top: 20px;
    }

    #sender_name {
        font-weight: bold;
        font-size: large;
    }
    #time{
        float: right
    }
    #sender_name, #time
    {
        display:inline;
    }

    #isRead, #isUnRead{
        float: right;
    }
    #content{
        max-width: 300px;
    }
    #content, #isUnRead {
        display:inline;
    }

</style>
