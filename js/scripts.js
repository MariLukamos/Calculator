var Package = {
  distance: function() {
    var regionFee = 145.02;
    let diff = (this.weight - 3) * 18.12;
    if (this.weight < 3) {
       return regionFee;
    } else {
       return +parseFloat(diff + regionFee).toFixed(2);
    }
  }
};


$(document).ready(function() {
  $('form#new-package').submit(function(event) {
    event.preventDefault();

    var inputWeight = parseInt($('input#weight').val());
    var inputDistance = parseInt($('#distance').val());

    var newPackage = Object.create(Package);
    newPackage.weight = inputWeight;
    newPackage.distanceShipped = inputDistance;

    if (newPackage.distance() !== 'Invalid') {
      $('#show-price h2').text("Стоимость доставки составит " + newPackage.distance() + " руб.");
    } else {
        alert('We only ship packages whose weight is less than 100 pounds')
    }
});
});


