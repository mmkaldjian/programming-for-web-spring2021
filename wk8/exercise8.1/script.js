var vm = new Vue({
    el: "#alpacaForm",
    data: {
      firstName: '',
      lastName: '',
      street: '',
      state: 'MN', // if something in '', it defaults to this unless something else selected/entered
      availableStates: [
        {value: 'MN', name: 'Minnesota'},
        {value: 'WI', name: 'Wisconsin'},
        {value: 'MI', name: 'Michigan'},
        {value: 'SD', name: 'South Dakota'},
        {value: 'ND', name: 'North Dakota'},
        {value: 'IA', name: 'Iowa'},
      ],

      selectedColors: [],
      colors: [
        {name: 'White', value: 'white'},
        {name: 'Beige', value: 'beige'},
        {name: 'Pink', value: 'pink'},
        {name: 'Purple', value: 'purple'},
        {name: 'Gold', value: 'gold'},
      ],
      status: '',
    }
  })