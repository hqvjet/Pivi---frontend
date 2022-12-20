export const convertDateToDay = date => {
    const currentDate = new Date();
    const options1 = {year: 'numeric', month: 'numeric', day: 'numeric'}
    const options2 = {hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h24'}
    const have1 = currentDate.toLocaleDateString('zh-CN', options1)
    const have2 = currentDate.toLocaleDateString(undefined, options2)
    const have = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    }
    const given = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    }

    //get have.year
    for (let i = 0; i < 4; ++i)
        have.year += Number(have1[i]) * Math.pow(10, 3 - i)

    //get have.month
    for (let i = 5; i < 7; ++i)
        have.month += Number(have1[i]) * Math.pow(10, 6 - i)

    //get have.day
    for (let i = 8; i < 10; ++i)
        have.day += Number(have1[i]) * Math.pow(10, 9 - i)

    //get have.hour
    for (let i = 12; i < 14; ++i)
        have.hour += Number(have2[i]) * Math.pow(10, 13 - i)

    //get have.minute
    for (let i = 15; i < 17; ++i)
        have.minute += Number(have2[i]) * Math.pow(10, 16 - i)

    //get have.second
    for (let i = 18; i < 20; ++i)
        have.second += Number(have2[i]) * Math.pow(10, 19 - i)

    //get given.year
    for (let i = 0; i < 4; ++i)
        given.year += Number(date[i]) * Math.pow(10, 3 - i)

    //get given.month
    for (let i = 5; i < 7; ++i)
        given.month += Number(date[i]) * Math.pow(10, 6 - i)

    //get given.day
    for (let i = 8; i < 10; ++i)
        given.day += Number(date[i]) * Math.pow(10, 9 - i)

    //get given.hour
    for (let i = 11; i < 13; ++i)
        given.hour += Number(date[i]) * Math.pow(10, 12 - i)

    //get given.minute
    for (let i = 14; i < 16; ++i)
        given.minute += Number(date[i]) * Math.pow(10, 15 - i)

    //get given.second
    for (let i = 17; i < 19; ++i)
        given.second += Number(date[i]) * Math.pow(10, 18 - i)

    //solution
    if(have.year > given.year) {
        const sub = have.year - given.year
        return `${sub} year${sub !== 1 ? 's' : ''} ago`
    }
    else if(have.month > given.month) {
        const sub = have.month - given.month
        return `${sub} month${sub !== 1 ? 's' : ''} ago`
    }
    else if(have.day > given.day) {
        const sub = have.day - given.day
        return `${sub} day${sub !== 1 ? 's' : ''} ago`
    }
    else
        return 'today'
}