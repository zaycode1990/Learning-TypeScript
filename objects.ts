//suboptimal syntax
const person: {
    name:string;
    age: number;
} = {
    name: "Isaiah Jefferson",
    age: 30
};

enum Tier {TIER1, TIER2, TIER3 = 'Tier3'}; // enum variables, can set enum values such as third enum

//typescript creation of array variable
let favHobbies: string[];
favHobbies = ['basketball']
//optimal syntax when creating object
const betterPerson = {
    name: "Isaiah Jefferson",
    age: 32,
    hobbies: ['Coding', 'Exercising', 'Gaming'],
    role: [2, 'software developer'] //tuple inferred
}

//setting a tuple in an object
const newPerson: {
name: string;
age: number;
hobbies: string[],
role: [number, string]; 
} = {
name: "Isaiah Jefferson",
age: 32,
hobbies: ['Coding', 'Exercising', 'Gaming'],
role: [2, 'software developer']
}


    
//alternative object creation

const uniquePerson: {} = {
    name: "Isaiah Jefferson",
    age:32
}


console.log(person.name);
