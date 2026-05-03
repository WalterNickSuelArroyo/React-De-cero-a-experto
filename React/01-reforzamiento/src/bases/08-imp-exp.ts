import {heroes, type Hero, Owner} from '../data/heroes.data';

const getHeroById = (id:number): Hero | undefined => {
    const  hero = heroes.find((hero) => {
        return hero.id === id;
    });
    // if (!hero) {
    //     throw new Error(`No existe un hero con el id ${id}`);
    // }
    return hero;
}

// console.log(getHeroById(1));



// Tarea

// getHeroesByOwner => Hero[]
// Filtra heroes por su propietario
// @param Owner - El propietario por el cual filtrar(DC o Marvel)
// @returns Array de heroes pertenecientes al propietario
// En main.ts usaremos esta función

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    const filteredHeroes = heroes.filter((hero) => {
        return hero.owner === owner;
    });

    return filteredHeroes;

}