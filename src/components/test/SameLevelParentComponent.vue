

    <template>
        <div class="same-level-parent">
            <ul id="example-1">
                <li v-for="element in elements" :key="element.id">
                    {{ element.name }}
                </li>
            </ul>
        </div>
    </template>

    <script>
        export default {
            name: "SameLevelParentComponent",
            computed: {
                notification(){
                    console.log("This is a notifcation")
                },
                elements(){
                    return this.$store.getters.elementsList;
                }
            },
        }
    </script>

    <style scoped>

    </style>




