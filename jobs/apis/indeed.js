import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

const instance = axios.create({
  baseURL: 'http://api.indeed.com/ads/apisearch?'
});

instance.interceptors.request.use(
  async config => {
    const { latitude, longitude } = qs.parse(config.url);
    // const zip = await reverseGeocode({ latitude, longitude });
    const zip = 2127; // to be removed

    const params = {
      publisher: '4201738803816157',
      format: 'json',
      v: '2',
      latlong: 1,
      radius: 10,
      q: 'javascript',
      l: zip
    };

    config.url = `${qs.stringify(params)}`;

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
