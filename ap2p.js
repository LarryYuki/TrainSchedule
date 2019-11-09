let firstTime = "0300"
let time = moment(firstTime, 'HH:mm')

console.log(time)

let tDiffer = moment('h.mm').diff(moment(time));
console.log(tDiffer)








// figure out difference (.diff()) of now and the first train time
// figure out how long since last train ( with modulo of frequency)
// minutes til next is frequency minus time since last train
// time of next train is now plus minutes til next train (.add())





// //moment notes
// console.log(moment)
// moment() //= now
// let noon = '12:00'
// console.log(moment(noon, "hh:mm")) // the string inside moment is how you parse the noon string
// console.log(moment(noon, "MM:YY")) // the string inside moment is how you parse the noon string, now as months and years
// moment().format("hh:mm")