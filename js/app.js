const app = Vue.createApp ({
    // data, functions, events
    // template: '<h2>Ryo Fujiwara</h2>'
    data() {
        return {
            name: "Giannis",
            last: "Antetokoumpo",
            points: 0
        }
    },
    methods: {
        changeName(name) {
            // this.name = "Thanasis"
            this.name = name
        }
    }
})

app.mount('#app')