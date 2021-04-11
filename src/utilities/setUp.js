import geolocation from 'geolocation';
import { loglanFetch } from '../helpers/fetchData';

export default function setUp() {
  geolocation.getCurrentPosition(async (err, position) => {
    if (err) throw err;
    loglanFetch(position.coords);
  });
}