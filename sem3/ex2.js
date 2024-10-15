const products = [
    { name: 'Laptop', price: 800 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 },
];

// const productsWithDiscountedPrices = // folosește metoda map pentru a adăuga un discount de 10% fiecărui produs

const productsWithDiscountedPrices = products.map(product => {
    return {
        name: product.name,
        price: product.price - (product.price * 0.1)
    }
})
console.log(productsWithDiscountedPrices);

/* expected output:
[
  { name: 'Laptop', price: 720 },
  { name: 'Smartphone', price: 450 },
  { name: 'Tablet', price: 270 }
]
*/