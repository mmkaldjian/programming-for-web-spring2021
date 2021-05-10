var vm = new Vue({
    el: "#requestForm",
    data: {
      // Organizational information
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

      // Primary contact information
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      position: '',

      // Project details
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
      max: 500, // max characters allowed into project description box
      dueDate: '',
      selectedBudget: '',
      possibleBudgets: [
        {name: '$50-99', value: 'low'},
        {name: '$100-249', value: 'low-middle'},
        {name: '$250-499', value: 'middle'},
        {name: '$500+', value: 'high'},
      ],
    },

    methods: {
      checkEmail: function () {
        if(this.email !== "") { // if email field contains text
          alert('Thank you for submitting your request! We will contact you via email within 24 hours.');
          console.log('Organization Name:', this.orgName, 'Primary Contact:', this.firstName, this.lastName, 'Email:', this.email);
        }
        else { // if email field does not contain text
          alert('Please make sure you have given us an email before submitting.');
        }
      },
    }
  })

  