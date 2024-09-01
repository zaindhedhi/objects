// let obj = {
//     userName: 'zain',
//     age: 20,


// }
// delete obj.age
// console.log(obj)

// let user = {
//     name: "usman",
//     email:"mabdullah2037@gmail.com",
//     hobbies: ["swimming"],
//     greetUser : function (){
//         console.log(this.name);
//     }
// }
// user.greetUser()

// function hello (abc){
//     console.log(abc);
//     console.log(abc.innerHTML);


// }

// let nestedData = [
//     {
//         category: "Electronics",
//         subcategories: [
//             {
//                 name: "Smartphones",
//                 products: [
//                     { brand: "Apple", model: "iPhone 13", price: 999 },
//                     { brand: "Samsung", model: "Galaxy S21", price: 799 },
//                     { brand: "Google", model: "Pixel 6", price: 699 }
//                 ]
//             },
//             {
//                 name: "Laptops",
//                 products: [
//                     { brand: "Apple", model: "MacBook Pro", price: 1499 },
//                     { brand: "Dell", model: "XPS 13", price: 1299 },
//                     { brand: "HP", model: "Spectre x360", price: 1199 }
//                 ]
//             }
//         ]
//     },
//     {
//         category: "Clothing",
//         subcategories: [
//             {
//                 name: "Men's",
//                 products: [
//                     { brand: "Nike", item: "T-shirt", price: 25 },
//                     { brand: "Adidas", item: "Joggers", price: 40 }
//                 ]
//             },
//             {
//                 name: "Women's",
//                 products: [
//                     { brand: "Zara", item: "Dress", price: 50 },
//                     { brand: "H&M", item: "Jeans", price: 30 }
//                 ]
//             }
//         ]
//     }
// ];

// console.log(nestedData[1].subcategories[0].products[1].brand)









let products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 600 },
    { name: "Tablet", price: 400 },
    { name: "Headphones", price: 150 },
    { name: "Smartwatch", price: 250 },
    { name: "Monitor", price: 300 },
    { name: "Keyboard", price: 50 },
    { name: "Mouse", price: 30 },
    { name: "Printer", price: 200 },
    { name: "External Hard Drive", price: 120 }
];

let div = document.querySelector('div')

for(let i = 0; i < products.length; i++){
    console.log(products[i])
    div.innerHTML += `
    <h1>Name : ${products[i].name}</h1>
    <h1>Price : ${products[i].price}</h1>
    <hr  />
    `
  
}






