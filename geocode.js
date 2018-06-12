const request = require('request');
// two arguments
// options object
// callback function - gets called when json data comes back to
// our application
// Update: we are now able to handle exceptions well thanks to the if-else statements
var geocodeAddress = (address , callback) => { 
    var encodedAddress = encodeURIComponent(address);
    
    request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    // tells requsest that data coming back is json data
    json: true
    // body is everything that you see on the screen. The core data
    // error will display if we get an error
    // for example if you have a bad domain name you will get an error
}, (error, response, body) => {
    // Preety print object
    // Will show everything
    //console.log(JSON.stringify(body, undefined, 2));
    // if there is an error like 404 error
    if(error){
        callback("unable to connect to google servers")
    }else 
        if(body.status === 'ZERO_RESULTS'){
        callback("Unable to find that address");
    }else 
        if (body.status === 'OK'){
            callback(undefined,{
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }

    });
};

// exporting to app.js
module.exports.geocodeAddress = geocodeAddress;
