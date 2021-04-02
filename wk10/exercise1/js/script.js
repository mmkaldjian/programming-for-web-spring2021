var baseURL = "https://ghibliapi.herokuapp.com";
var vm = new Vue({
    el: "#app",
    data: {
        films: []
    },
    methods: {
        getFilms: function() {
            axios.get(baseURL + "/films").then(function(response){ /**get data from axiouss**/
                console.log(response);
                vm.films = response.data;
            })
        }
    },
    created: function() { /**when this instance is created, it will automatically make request**/
        this.getFilms();
    }
});