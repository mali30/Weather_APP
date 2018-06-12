const yargs = require('yargs');
const geocode = require('./geocode/geocode');
 const weather = require('./weather/weather');

const argv = yargs.option({
    a: {
        demand: true,
        alias: 'address',
        describe: "Address to fetch weather for",
        // string takes boolean
        // tells yargs to always parse the (a) as a string
        string: true

    }
})
    // adds help argument
    .help()
    // takes two arguments: actual argument that you want to set alias for
    // and the actual alias
    .alias('help', 'h')
    .argv;


    geocode.geocodeAddress(argv.address , (errorMessage , results) => {
        if(errorMessage){
            console.log(errorMessage);
        }else{
            // preety print
            console.log(results.address);
            weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
                if(errorMessage){
                    console.log(errorMessage);
                }else{
                    console.log(`It's currently ${weatherResults.temperature}. It feel likes ${weatherResults.apparentTemperature}. `)
                }
            });
        }

    });






// //encodeURIComponent();
// //decodeURIComponent();





















