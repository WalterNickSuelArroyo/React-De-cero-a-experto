const person = {
    name: 'John',
    age: 30,
    key: 'Ironman'
};

const { name, age, key } = person;

console.log({name, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ name, age, key, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank
    }
}

const context = useContext(person);

const { keyName, user:{name: userName}, rank } = useContext(person);

console.log(context);

console.log({keyName, userName, rank});