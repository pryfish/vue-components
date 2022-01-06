export function getTime() {
    const stamp1 = new Date().getTime()
    const stamp3 = new Date().getTime() - 3 * 24 * 60 * 60 * 1000
    const stamp7 = new Date().getTime() - 7 * 24 * 60 * 60 * 1000
    const date1 = new Date(stamp1)
    const year1 = date1.getFullYear()
    let agoMonth1 = date1.getMonth()
    let month1 = date1.getMonth() + 1
    let day1 = date1.getDate()
    let hour1 = date1.getHours()
    let minute1 = date1.getMinutes()
    let second1 = date1.getSeconds()
    const date3 = new Date(stamp3)
    const year3 = date3.getFullYear()
    let month3 = date3.getMonth() + 1
    let day3 = date3.getDate()
    const date7 = new Date(stamp7)
    const year7 = date7.getFullYear()
    let month7 = date7.getMonth() + 1
    let day7 = date7.getDate()
    agoMonth1 = agoMonth1 <= 9 ? `0${agoMonth1}` : agoMonth1
    month1 = month1 <= 9 ? `0${month1}` : month1
    day1 = day1 <= 9 ? `0${day1}` : day1
    hour1 = hour1 <= 9 ? `0${hour1}` : hour1
    minute1 = minute1 <= 9 ? `0${minute1}` : minute1
    second1 = second1 <= 9 ? `0${second1}` : second1
    month3 = month3 <= 9 ? `0${month3}` : month3
    day3 = day3 <= 9 ? `0${day3}` : day3
    month7 = month7 <= 9 ? `0${month7}` : month7
    day7 = day7 <= 9 ? `0${day7}` : day7
    const currentDay = `${year1}-${month1}-${day1}`
    const currentTime = `${year1}-${month1}-${day1} ${hour1}:${minute1}:${second1}`
    const threeDaysAgo = `${year3}-${month3}-${day3}`
    const sevenDaysAgo = `${year7}-${month7}-${day7}`
    const oneMonthAgo = `${year1}-${agoMonth1}-${day1}`
    return {
        currentDay,
        currentTime,
        threeDaysAgo,
        sevenDaysAgo,
        oneMonthAgo
    }
}
