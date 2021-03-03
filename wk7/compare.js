var vm = new Vue({
    el: "#app",
    data: {
        llamaWiki: "https://en.wikipedia.org/wiki/Llama",
        alpacaWiki: "https://en.wikipedia.org/wiki/Alpaca",
        isActive: true, // toggles h2 style class to be active

        headerStyle: { // this is the style for the inline bound style
            color: "black",
            border: "1px solid white",
            fontSize: "50px",
        },
    }
});