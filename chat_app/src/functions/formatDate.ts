export function formatDate (date: Date) {
    let hours = formatItem(date.getHours())
    let minutes = formatItem(date.getMinutes())
    let day = formatItem(date.getDate())
    let month = formatItem(date.getMonth())
    let year = date.getFullYear()
    return hours + ':' + minutes + ' ' + day + '.' + month + '.' + year
}

function formatItem (item: number) {
    let temp = ''
    if (item < 10) {
        temp = '0'
    }
    return temp + item
}