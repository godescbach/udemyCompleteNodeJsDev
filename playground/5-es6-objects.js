// Object property shorthand

const name = 'Tom'
const age = 53

const user = {
  name,
  age,
  location: 'Dallas'
}

console.log(user)

// Object destructuring
// trying to access properties of an object

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const { label, stock, rating } = product
// console.log(label)
// console.log(stock)
// console.log(rating)

// const { label:productLabel, stock, rating = 5 } = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {//myProduct) => {
  // could destruct product here
  console.log(type, label, stock)
}

transaction('order', product)