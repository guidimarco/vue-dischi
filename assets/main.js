var app = new Vue({ // VUE INSTANCE
    el: "#wrapper",
    data: {
        currentDiscIndex: 0,
        discs: [],
        selectedGenre: "all",
        discGenre: [],
    },
    methods: {
        getDiscs: function() {
            axios // GET discs from API boolean
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then( (discsObj) => {
                    // copy the discs-array into this discs (LOCAL)
                    this.discs = discsObj.data.response;

                    // get GENRE for each disc and save into this discGenre
                    this.getDiscGenre();

                    // sort the array in order to disc.year
                    this.sortDiscs();
                })
            ;
        },
        getDiscGenre: function() {
            this.discs.forEach( (disc) => {
                let currentGenre = disc.genre;

                if (!this.discGenre.includes(currentGenre)) {
                    // current genre it's not includes --> push
                    this.discGenre.push(currentGenre);
                }

            });
        },
        sortDiscs: function() {
            this.discs.sort( (a, b) => {
                return a.year - b.year;
            });
        },
    },
    mounted() {
        this.getDiscs();
    },
});
