import { db } from '../../../db/db';
import CharacterLink from './CharacterLink';

function Characters() {

    db.sort(function(a, b){
        return b.power - a.power;
    });
    const  characters = db.map((char) => <CharacterLink character={char} key={char.name}/>)
    return (
        <div className='characters'>
            
            <div className='characterLink headers'>
            
                <h2 className='name'>Name</h2>
                <p  className='power'>Power</p>
                <p className='level'>Level</p>
                <p className='gear'>Gear</p>
                <p className='iso'>Iso-8</p>
                <p className='class'>Iso-8 Class</p>

            </div>
            {characters}

        </div>
    )
}

export default Characters;