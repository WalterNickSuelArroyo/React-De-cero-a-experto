// const ironman = {
//     firstName: 'Bruce',
//     lastName: 'Wayne',
//     age: 35,
// };

// ironman.firstName = 'Clark';
// ironman.lastName = 'Kent';
// ironman.age = 30;

// console.log(ironman);

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 35,
    address: {
        postalCode: '12345',
        city: 'Gotham'
    }
};

console.log(ironman);
