const Arr=[
    {
        name:"student",
        class:10,
        age:10
    },
    {
        name:"student1",
        class:10,
        age:10
    },
    {
        name:"student2",
        class:10,
        age:10
    },
    {
        name:"student3",
        class:10,
        age:10
    },
    {
        name:"student4",
        class:10,
        age:10
    },
    
]
console.log(Arr)
const arrowfunction=(e)=>{


    const readData =`the student name is ${e.name}, the age is ${e.age}`
    console.log(readData);



}


Arr.map(arrowfunction)
