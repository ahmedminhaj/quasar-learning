<template>
    <q-page padding>
        <div v-theme:dark="'large'">
            <h3 v-custle>Test Ground</h3>
        </div>
    </q-page>
</template>

<script>
import {firstMixin} from "../mixin/first-mixin.js"

export default {
    name: 'TestView',
    mixins: [
        firstMixin,
    ],
    components: {},
    data (){
        return {
            greet: 'goodbye',
            space: 'view',
        }
    },
    newOption: 'hello vue mixin',
    methods: {
        hello: function (){
            console.log("hello from view")
        }
    },
    created: function(){
        console.log(this.$data)
    }
}
</script>

<style>

</style>