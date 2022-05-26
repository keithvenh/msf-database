import { roster } from '../../db/db';

function checkCollectionStatus(character) {

    return roster.filter((char) => { return char.name == character && char.stars > 0 }).length

}

export default checkCollectionStatus;