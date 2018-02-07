import axios from 'axios'

export default function geocode(latitude, longitude){

  var latilong= latitude + ',' + longitude;
  axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params:{
      latlng:latilong,
      key:'AIzaSyAOxDrKboEqRrdmFT-0JbkEF7VT2kUkwFg'
    }
  })
  .then(function(response){
    console.log(response);

    var formattedAddress = response.data.results[0].formatted_address;
    var formattedAddressOutput = formattedAddress;

    document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
  })
  .catch(function(error){
    console.log(error);
  })
}
