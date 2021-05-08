var vm = new Vue({
    el: "#requestForm",
    data: {
      orgName: '',
      orgCity: '',
      orgState: 'MN',
      orgType: '',
      possibleTypes: [
        {value: 'small', name: 'Small Business'},
        {value: 'NPO', name: 'Nonprofit'},
        {value: 'Individual', name: 'Private Individual'},
        {value: 'Other', name: 'Other'},
      ],
      otherType: '',
      ein: '',

      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      position: '',
      projectType: '',
      possibleProjects: [
        {name: 'Branding/Logo', value: 'branding'},
        {name: 'Event Design', value: 'event'},
        {name: 'Video/Animation', value: 'video'},
        {name: 'Social Media', value: 'social'},
        {name: 'Fundraising Campaign', value: 'campaign'},
        {name: 'Other', value: 'other'},
      ],
      otherProject: '',
      description: '',
      dueDate: '',
      budget: '',
      possibleBudgets: [
        {name: '$50-99', value: 'low'},
        {name: '$100-249', value: 'low-middle'},
        {name: '$250-499', value: 'middle'},
        {name: '$500+', value: 'high'},
      ],
    },

    methods: {
      checkEmail: function () {
        if(this.email !== "") {
          alert('Thank you for submitting your request! We will contact you via email within 24 hours.');
          console.log(this.firstName, this.lastName, this.email);
        }
        else {
          alert('Please make sure you have given us an email before submitting.');
        }
      },
    }
  })

  