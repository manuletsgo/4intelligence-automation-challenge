import { group, sleep } from 'k6'

import ListUsers from './scenarios/ListUsers.js'

export default function () {
  group('Serverest - List Users', () => {
    ListUsers()
  })

  sleep(1)
}
