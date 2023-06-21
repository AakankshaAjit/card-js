// const API = "https://dummyjson.com/products";

// const FetchData = async () => {

//     // fething the api and waiting for res
//   const response = await fetch(API);

//   // waiting for res to convert into json
//   const MYdata = await response.json();

//   // assigning a var. to our data products
//   const MyArr = MYdata.products;

//   for (let i = 0; i < MyArr.length; i++) {
//     const Div = document.getElementById("div");
//     const para = document.createElement("p");
//     para.classList.add("para")
//     para.innerText = MyArr[i].title;
//     Div.append(para);
//   }

// };

// FetchData();
let input = 1

const NextProduct=()=>{
 input = input+1
  const API = `https://dummyjson.com/products/${input}`;
  FecthData(API);
}



const FecthData = async (API) => {
  const res = await fetch(API);
  const data = await res.json();
  console.log(data);
  const {
    brand,
    category,
    description,
    discountPercentage,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = data;

const div = document.getElementById('div')
const card = document.createElement('div')
card.classList.add('myCard')
const img = document.createElement('img')
const title1 = document.createElement('span')
const price1= document.createElement('span')
img.src=thumbnail
title1.innerText=title
title1.classList.add('mytitle')
price1.innerText= price
card.append(img, title1, price1)
div.append(card)
 

};


