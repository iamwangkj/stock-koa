import schedule from 'node-schedule'

function job1 () {
  schedule.scheduleJob('*/2 * * * * *', () => {
    // console.log('The answer to life, the universe, and everything!')
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
