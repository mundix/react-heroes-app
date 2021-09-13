import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publiser) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if(!validPublishers.includes(publiser)) {
        throw new Error(`Publisher "${publiser}" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publiser);

}