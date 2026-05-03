function greet(name: string): string {
    return `Hello, ${name}!`;
}

const greet2 = (name: string) =>  `Hello, ${name}!`;

const message = greet("Alice");
const message2 = greet2("Bob");

console.log(message, message2);

interface User {
    uid: string;
    username: string;
}

function getUser (): User {
    return {
        uid: 'ABC-123',
        username: 'nick'
    };
}

const getUser2 = () => ({    
        uid: 'ABC-456',
        username: 'loco'    
});

const user = getUser();
const user2 = getUser2();

console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach((value) => console.log({value}));

// Otra forma de escribirlo sería:
// myNumbers.forEach(function(value) {
//     console.log({value});
// })
