const weather = require('./weather');
// Join multiple values passed as arguments
const query = process.argv.slice(2).join(' ');
// query: 90201
// query: Cleveland

weather.get(query);
