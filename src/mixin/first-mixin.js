export const firstMixin = {
    created: function () {
        var newOption = this.$options.newOption
        if (newOption) {
            console.log(newOption)
        }
        this.hello()
    },
    data() {
        return {
            greet: "good afternoon",
            scope: "mixin"
        }
    },
    methods: {
        hello: function () {
            console.log("hello first mixin")
        }
    }
}

//export default firstMixin