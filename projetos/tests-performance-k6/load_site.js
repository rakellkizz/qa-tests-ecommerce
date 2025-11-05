import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'],
    http_req_failed: ['rate<0.01'],
  },
  tags: { project: 'qa-tests-ecommerce', suite: 'k6-site' }
};

const BASE = __ENV.K6_BASE_URL || 'http://host.docker.internal:8080';

export default function () {
  const res = http.get(BASE + '/');
  check(res, { 'status 200': (r) => r.status === 200 });
  sleep(1);
}
