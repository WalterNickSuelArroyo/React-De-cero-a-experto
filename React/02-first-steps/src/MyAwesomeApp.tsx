import type { CSSProperties } from "react";

const firstName = 'Fermando';
const lastName = 'Herrera';
const favoriteGames = ['The Legend of Zelda', 'Super Mario Bros', 'Minecraft'];
const isActive = true;
const address = {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
}

const myStyles: CSSProperties = {
    backgroundColor: 'lightblue',
    padding: '10px',
    borderRadius: '15px',
    marginTop: '30px',
}

export function MyAwesomeApp() {    
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Active' : 'Inactive'}</h1>
            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    )
}