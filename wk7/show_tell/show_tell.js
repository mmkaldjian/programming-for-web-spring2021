const printArray = [{
	image: "img/img/schwartz_gestureXIV.jpg"
    title: "Gesture XIV",
    artist: "Linda Schwartz",
    year: 2002,
    edition: "Printer's Proof",
    medium: "Photolithography, hand painted & varnish"
},{
	image: "img/img/marks_butterflyweed.jpg"
    title: "Butterfly Weed",
    artist: "Mike Marks",
    year: 2021,
    edition: "1/1",
    medium: "woodcut"
},{
	image: "img/img/lin_lakestreet.jpg"
    title: "Lake Street, Minneapolis, MN",
    artist: "Cori Lin",
    year: 2019,
    edition: "uneditioned",
    medium: "Inkjet print of original watercolor illustration"
},{
	image: "img/img/nuzzo_lie.jpg"
    title: "Lie",
    artist: "Jacqueline Nuzzo",
    year: 2019,
    edition: "1/5",
    medium: "Digitized illustration on Hahnemühle Photo Rag Bright White"
},{
	image: "img/img/sheely_redflower.jpg"
    title: "Red Flower",
    artist: "Landon Sheely",
    year: 2018,
    edition: "Uneditioned",
    medium: "Digital print"
}];

var myVue = new Vue({
  el: "#print-list",
  data: {
    prints: printArray
  }
})