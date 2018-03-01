



var app = new Vue({
  el: '#app',
  data: {
    addedPlace: '',
    resultsFound: true,
    items: {},
  },
  methods: {
    searchPlace: function() {
      this.items = {};
      //var autocomplete = new google.maps.places.Autocomplete(this.addedPlace);
      var request = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query='+ this.addedPlace +'+point+of+interest&language=en&key=AIzaSyCdvH7UnJg0GtwSX0ey0F3w2BdNXRAjvY4'
      fetch(request).then(response => {
      return response.json();
    }).then(json => {
        this.items = json.results;
        if(json.status === "ZERO_RESULTS") {
          this.resultsFound = false;
          return;
        }
        this.resultsFound = true;
        console.log(json);
        console.log(this.items[0].photos[0]);
    })
    },
  },

})
