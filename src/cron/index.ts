import schedule from 'node-schedule'
import { writeTodayStock } from './stock'

function job1 () {
  schedule.scheduleJob('30 15 * * * *', () => {
    writeTodayStock()
  })
}

function job2 () {
  schedule.scheduleJob('*/3 * * * * *', () => {
    // console.log('job2 start')
  })
}

export default function cron () {
  job1()
  job2()
}
