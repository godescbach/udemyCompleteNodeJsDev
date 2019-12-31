const fs = require('fs')

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book)

// // console.log(bookJSON)

// // const parsedData = JSON.parse(bookJSON)
// // console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)


// console.log(JSON.parse(fs.readFileSync('1-json.json').toString()).title)
data = JSON.parse(fs.readFileSync('1-json.json').toString())
data.name = 'Tom'
data.age = 53
fs.writeFileSync('1-json.json', JSON.stringify(data))
