Vue.component('print-component', {
    template: 
    `<tr>
          <td class="image"><img v-bind:src="image"></td>
          <td class="title">{{title}}</td>
          <td class="artist">{{artist}}</td>
          <td class="year">{{year}}</td>
          <td class="edition">{{edition}}</td>
          <td class="medium">{{medium}}</td>
      </tr>`,

    props: ['image', 'title', 'artist', 'year', 'edition', 'medium']
});

const printArray = [{
	image: "img/schwartz_gestureXIV.jpg",
    title: "Gesture XIV",
    artist: "Linda Schwartz",
    year: 2002,
    edition: "Trial Proof",
    medium: "Photolithography, hand painted & varnish"
},{
	image: "img/marks_butterflyweed.jpg",
    title: "Butterfly Weed",
    artist: "Mike Marks",
    year: 2021,
    edition: "1/3",
    medium: "woodcut"
},{
	image: "img/lin_lakestreet.jpg",
    title: "Lake Street, Minneapolis",
    artist: "Cori Lin",
    year: 2019,
    edition: "uneditioned",
    medium: "Inkjet print of watercolor illustration"
},{
	image: "img/nuzzo_lie.jpg",
    title: "Lie",
    artist: "Jacqueline Nuzzo",
    year: 2019,
    edition: "1/5",
    medium: "Digitized illustration on Hahnemühle Photo Rag"
},{
	image: "img/sheely_redflower.jpg",
    title: "Red Flower",
    artist: "Landon Sheely",
    year: 2018,
    edition: "Uneditioned",
    medium: "Digital print"
}];

var vm = new Vue({
    el: "#print-list",
    data: {
      newPrintObject: {
        image: "",
        title: "",
        artist: "",
        year: null,
        edition: "",
        medium: ""
      },
      prints: printArray
    },

    methods: {
        submitHandler: () => {
            console.log('submitted');
            vm.prints = vm.prints.concat(vm.newPrintObject); // will take the existing consoles and add the new console object to it
            vm.resetForm();
        },
        resetForm: () => {
            vm.newPrintObject = {
                image: "",
                title: "",
                artist: "",
                year: null,
                edition: "",
                medium: ""
            }
        },
        deleteItem: item => {
            vm.prints = vm.prints.filter(print => {
                return print != item; //if objet being passed in doesn't equal the item, then keep it. but if it does match the print, then it doesn't get passed back.  
            });
        }
    }
  });