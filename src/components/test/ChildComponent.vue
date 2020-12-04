

    <template>
        <div class="child">
            <div id="profile_img">
                <img v-bind:src="element.profileImage"/>
            </div>
            <div class="info">
                {{element.name}}
            </div>
            <button v-on:click="changeStatus(true)">Set True</button>
            <button v-on:click="changeStatus(false)">Set False</button>
        </div>
    </template>

    <script>
        export default {
            name: "RequiredComponent",
            props: {
                element: Object,
            },
            methods: {
                changeStatus(status){
                    this.$emit('clicked', status);
                }
            }
        }
    </script>

    <style scoped>

    </style>
