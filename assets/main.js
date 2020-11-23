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
        posterNotFound: function(discIndex) {
            let srcPosterNotFound = "https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png";

            this.discs[discIndex].poster = srcPosterNotFound;
        },
    },
    mounted() {
        this.getDiscs();
    },
});
