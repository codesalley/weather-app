import {loglanFetch} from '../helpers/fetchData'
import showData from '../view/showWeather';
export default function setUp() {
    const geolocation = require('geolocation')

    geolocation.getCurrentPosition(async function (err, position) {
      if (err) throw err
       loglanFetch(position.coords);  
    });


};