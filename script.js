const UsersData = [
  {
    name: "user1",
    purchase: [
      { "12/12/12": 5000 },
      { "11/12/12": 5000 },
      { "10/12/12": 3300 },
      { "09/12/12": 2000 },
    ],
  },
  {
    name: "user2",
    purchase: [
      { "12/12/12": 5000 },
      { "11/12/12": 5000 },
      { "10/12/12": 3300 },
      { "09/12/12": 2000 },
    ],
  },
  {
    name: "user3",
    purchase: [
      { "12/12/12": 5000 },
      { "11/12/12": 5000 },
      { "10/12/12": 3300 },
      { "09/12/12": 2000 },
    ],
  },
  {
    name: "user4",
    purchase: [
      { "12/12/12": 5000 },
      { "11/12/12": 5000 },
      { "10/12/12": 3300 },
      { "09/12/12": 2000 },
    ],
  },
];

let AllPurchases=[]


const arrowfunction=(e)=>{
    e.purchase.map((ele)=>{
      AllPurchases.push(ele)
    })

}

  


UsersData.map(arrowfunction)

