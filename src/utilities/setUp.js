import { loglanFetch } from '../helpers/fetchData';

const geolocation = require('geolocation');

export default function setUp() {
  geolocation.getCurrentPosition(async (err, position) => {
    if (err) throw err;
    loglanFetch(position.coords);
  });
}