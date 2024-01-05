// const person = {
//     name: 'Vlad',
//     lastname: 'Holovin',
//     years: 14,
//     from: 'Ukraine'
//  };
 
// const JSONstr = JSON.stringify(person);
// console.log(typeof JSONstr);
// console.log(JSONstr);

// const knigi = '{"name":"Natalka-Poltavka"}';
// console.log(JSON.parse(knigi));

// const product = {
//   name: 'Cap',
//   price: 25.99,
//   quantity: 10
// };

// const productJSON = JSON.stringify(product);

// console.log(productJSON);

// product.price = 29.99;

// console.log(product);

// const arrObj = [
//   {
//     name: 'Artem', 
//     years: 14,
//     email: 'fkfvcgf@gmail.com'
//     },
//     {
//         name: 'Vlad', 
//         years: 14,
//         email: 'fkml@gmail.com'
//         },
//     {
//             name: 'Oleh', 
//             years: 19,
//             email: 'oleh@gmail.com'
//             }
// ];

// const JSONArrObj = JSON.stringify(arrObj);
// console.log(JSONArrObj);

// const carJSON = `{
//     "brand": "Audi",
//     "year": 2018,
//     "engineCapacity": 1.0
//   }`;
  
//   const car = JSON.parse(carJSON);
  
//   car.year = 2022;
  
//   console.log(JSON.stringify(car, null, 2));

const arr = [
  {
    name: 'Cap',
    price: 25.99,
    quantity: 10
    },
    {
   name: 'Cap',
   price: 20.99,
   quantity: 10
        },
    {
        name: 'Cap',
        price: 24.99,
        quantity: 10
            }
];

const filter = arr.find((product, index, array) => {
    return arr.price === Math.min(...array.map(p => p.price));
  });

  console.log(filter);