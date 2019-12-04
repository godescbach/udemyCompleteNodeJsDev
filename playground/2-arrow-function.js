// const square = function (x) {
//   return x * x
// }

// const square = (x) => {
//   return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
  name: 'Birthday Party',
  guestList: [ 'Andrew', 'Jen', 'Mike' ],
  // printGuestList:  () => { // does not work, arrow funcs can't bind 'this'
  // printGuestList: function () { works
  printGuestList() { // this works too, ES6 
    console.log('Guest list for ' + this.name)
    // this.guestList.forEach(function (guest) { // doesn't work, no this
    this.guestList.forEach((guest) => { // arrow funcs bind to this of context
      console.log(guest + ' is attending ' + this.name)
    })
  }
}

event.printGuestList()