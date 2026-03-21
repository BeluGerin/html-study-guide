import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10000,
  duration: '30s',
};

export default function () {
  http.get('https://uvers.ac.id');
  sleep(1);
}
