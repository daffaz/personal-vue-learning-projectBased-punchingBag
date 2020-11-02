new Vue({
    el: '#app',
    data: {
        health: 100,
        end: false
    },
    methods: {
        punch() {
            this.health = this.health - 10;
            if(this.health <=0) {
                this.end = true
            };
        },
        restart() {
            this.health = 100;
            this.end = false
        }
    },
    computed: {

    }
});