//suboptimal syntax
const person: {
    name:string;
    age: number;
} = {
    name: "Isaiah Jefferson",
    age: 30
};

//optimal syntax when creating object
const betterPerson = {
    name: "Isaiah Jefferson",
    age: 32
}
    
//alternative object creation

const uniquePerson: {} = {
    name: "Isaiah Jefferson",
    age:32
}


console.log(person.name);
