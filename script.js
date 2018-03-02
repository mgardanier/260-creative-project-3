



var app = new Vue({
  el: '#app',
  data: {
    addedPlace: '',
    resultsFound: false,
    show: false,
    photosExist: true,
    items: {},
  },
  methods: {
    searchPlace: function() {
      this.items = {};
      this.photosExist = true;
      //var autocomplete = new google.maps.places.Autocomplete(this.addedPlace);
      var request = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query='+ this.addedPlace +'+point+of+interest&language=en&key=AIzaSyCdvH7UnJg0GtwSX0ey0F3w2BdNXRAjvY4'
      fetch(request).then(response => {
      return response.json();
    }).then(json => {
        this.show = false;
        this.resultsFound = true;
        this.items = json.results;
        if(json.status === "ZERO_RESULTS") {
          this.show = true;
          this.resultsFound = false;
          return;
        }
        if(this.items[0].photos === undefined){
          photosExist = false;
        } else {
          photosExist = true;
        }
        this.show = true;
    })
    },
  },

})
