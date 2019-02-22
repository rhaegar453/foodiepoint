let x=[
    {
        name:'Shivaraj Bakale',
        age:23,
        address:"Old Badaminagar"
    }
    ,
    {
        name:'Sachin Bakale',
        age:22,
        address:"New Badaminagar"
    }
    ,
    {
        name:"Sheela Bakale",
        age:48,
        address:"Old Badaminagar"
    }
]
let key='Shivaraj Bakale'

x.forEach(element=>{
    if(element.name==key){
        console.log(true);
    }
})
