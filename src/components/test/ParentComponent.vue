
    <template>
        <div class="parent">
            <p>This is a paragrahp</p>
            <ChildComponent v-for="currentElement in elements" :key="currentElement.id" :element="currentElement" @clicked="onClickChild"/>
        </div>
    </template>

    <script>
        import ChildComponent from './ChildComponent.vue'
        export default {
            name: "ParentComponent",
            components: {ChildComponent},
            props: {
                name: String,
                status: false,
            },
            data: function () {
                return {
                    elementList: [],
                }
            },
            computed: {
                notification(){
                    console.log("This is a notifcation")
                },
                elements(){
                    return this.$store.getters.elementsList;
                }
            },
            created() {
                this.$store.dispatch("loadElementsUrl");
            },
            methods: {
                printElement(){
                    this.elementList.forEach(element => console.log(element));
                },
                onClickChild(status){
                    status ? this.status++ : this.status++;
                    console.log(status);
                    this.$store.commit('increment')
                }
            }
        }
    </script>

    <style scoped>
        .empty {
            text-align: center;
        }
    </style>






