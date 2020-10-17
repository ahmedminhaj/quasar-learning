<template>
<q-page padding>
    <h1 v-bind:title="loadTime">{{message}}</h1>
    <h3 v-if="seen">new element</h3>
    <ul>
        <li 
            v-for="(todo, index) in todos" 
            :key="index">
            <task :todo='todo' @delete-task="todos.splice(index, 1)"></task>
        </li>
    </ul>
    <input v-model="newTodo">
    <button v-on:click="addTodo">Add Todo</button>
    <div style="margin-top:20px;">
    <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username">
    </template>
    <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
    </template>
    <button @click="toggleOptoin">Login toggle</button>
    </div>
    <div 
        v-for="(value, name) in person" 
        :key="value">
            {{name}} :{{ value }} 
    </div>
    <div>
        <ul 
            v-for="(set, index) in sets" 
            :key="index">
                <li 
                    v-for="num in even(set)" 
                    :key="num">
                        {{ num }}
                </li>
        </ul>
    </div>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <select v-model="selected">
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}
        </option>
    </select>
    <span>
        Selected: {{ selected }}
    </span>
    <input v-model="searchText">
    <div>
        
        <myButton>
            <template slot="iconSign">
                <span> @ </span>
            </template>
            <span @click="runAlert">{{ buttonLabel }}</span>
        </myButton>
    </div>
    <div>
        <myButton></myButton>
    </div>
</q-page>
</template>

<script>
import {firstMixin} from "../mixin/first-mixin.js"
import task from "components/task.vue"
import myButton from "components/button.vue"

export default {
    name: 'HelloWorld', 
    mixins:[
        firstMixin,
    ], 
    components: {
        task,
        myButton,
    },
    data () {
        return {
            message: 'Hello Vue!',
            loadTime: 'You loaded this page on ' + new Date().toLocaleString(),
            seen: false,
            todos: [
                { title: 'JavaScript', id: 1, dueDate: '24 Sep 2020', },
                { title: 'VueJS', id: 2, dueDate: '26 Sep 2020' },
                { title: 'Quasar', id: 3, dueDate: '29 Sep 2020' },
            ],
            newTodo: '',
            loginType: 'username',
            person: {
                name: "jabbor",
                age: 34,
                city: "dhaka"
            },
            sets:[[1,2,3,4,5],[6,7,8,9,10]],
            checked: false,
            selected: 'A',
            options: [
                {text: "One", value: "A"},
                {text: "Two", value: "B"},
                {text: "Three", value: "C"}
            ],
            searchText: "search",
            buttonLabel: "Order Now",
        }
    },
    methods:{
            addTodo: function(){
                this.todos.push({title: this.newTodo});
                this.newTodo = '';
            },
            toggleOptoin: function(){
                (this.loginType == 'username') ? this.loginType = 'email' : this.loginType = 'username';
            },
            even: function(numbers){
                return numbers.filter(function (number){
                    return number % 2 === 0
                })
            },
            runAlert: function(){
                alert("Slot option")
            }

    },
    beforeCreate(){
        console.log("before create")
    },
    created(){
        console.log("created")
    },
    beforeMount(){
        console.log("before mount")
    },
    mounted(){
        console.log("mounted")
    },
    beforeDestroy(){
        console.log("before destroy")
    },
    destroyed(){
        console.log("destroyed")
    }
  
}
</script>
<style scoped>
 h1 {
     color: blue;
 }

 input, label{
     display: block;
 }
</style>