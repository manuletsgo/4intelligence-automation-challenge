import { Trend, Rate } from 'k6/metrics'
import { check, sleep } from 'k6'
import http from 'k6/http'

const SLEEP_DURATION = 1

export const options = {
  thresholds: {
    // fail the test if 95th percentile response goes above 300.000ms (5min)
    http_req_duration: ['p(95)<300000'],
    // http errors should be less than 20%
    http_req_failed: ['rate<0.20']
  }
}

export let ListUsersDuration = new Trend('list_users_duration')
export let ListUsersFailRate = new Rate('list_users_fail_rate')
export let ListUsersSuccessRate = new Rate('list_users_success_rate')
export let ListUsersReqs = new Rate('list_users_reqs')

export default function () {
  const url = 'https://serverest.dev/usuarios'

  const params = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  http.get(url, params)

  sleep(SLEEP_DURATION)
}
