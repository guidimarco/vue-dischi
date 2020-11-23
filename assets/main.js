var app = new Vue({ // VUE INSTANCE
    el: "#wrapper",
    data: {
        currentDiscIndex: 0,
        discs: [],
    },
    methods: {

    },
    mounted() {
        axios // GET discs from API boolean
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then( (discsObj) => {
                this.discs = discsObj.data.response;
            })
        ;
    },
});
