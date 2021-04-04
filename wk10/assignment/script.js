Vue.component('cocktail-list', {
    template: `<div class="cocktail"> 
        <h3>{{cocktail.strDrink}}</h3>
        <div><img v-bind:src="cocktail.strDrinkThumb" alt=""></div>

        <strong>Ingredients:</strong>
        <p>{{cocktail.strIngredient1}}, {{cocktail.strIngredient2}}, {{cocktail.strIngredient3}}</p>
        <strong>Instructions:</strong> <p>{{cocktail.strInstructions}} Serve in a {{cocktail.strGlass}}.</p>
    </div>`,
    props: ['cocktail'],
    
});

const vm = new Vue({
    el: "#cocktailApp",
    data: {
        cocktails: []
    },

    mounted () { /*similar to 'draw' of p5js*/
        axios
            .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z') /*use get to fetch data*/
            .then(response => { /*response after get it*/
                console.log('response', response);
                vm.cocktails = response.data.drinks;
                console.log(vm.cocktails);
                });
    }
})

