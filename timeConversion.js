function timeConversion(s) {
    const timeSplit = s.split(':')
    let formattedTime = ""
    if(timeSplit[timeSplit.length - 1].endsWith('PM') && Number(timeSplit[0]) === 12) {
        timeSplit[0] = 12}
    else if(timeSplit[timeSplit.length - 1].endsWith('PM') && Number(timeSplit[0]) >= 1) {
        timeSplit[0] = Number(timeSplit[0]) + 12
    } else if(timeSplit[timeSplit.length - 1].endsWith('AM') && Number(timeSplit[0]) === 12) {
        timeSplit[0] = '00'
    }
   formattedTime = timeSplit.join(":")
   return formattedTime.substring(0, formattedTime.length - 2)
}



