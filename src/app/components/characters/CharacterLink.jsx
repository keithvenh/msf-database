import calculateGoalLevel from '../../helpers/calculateGoalLevel';

function CharacterLink(props) {

    const goalLevel = calculateGoalLevel(props.character);
    const minion = props.character.tags.includes('Minion') ? '' : <span className={`ability ${goalLevel.ultimate >= props.character.goals.tier}`}>{props.character.abilities.ultimate}</span>;
    return (
        <div className='characterLink' onClick={() => props.viewCharacter('character', props.character)}>
            
            <h2 className='name'>{props.character.name}</h2>
            <p  className='power'>{props.character.power}</p>
            <p className='stars'>
                <span className={`star ${props.character.redStars >= 1 ? 'red' : 'yellow'}`}>{props.character.stars >= 1 ? `★`: `☆`}</span>
                <span className={`star ${props.character.redStars >= 2 ? 'red' : 'yellow'}`}>{props.character.stars >= 2 ? `★`: `☆`}</span>
                <span className={`star ${props.character.redStars >= 3 ? 'red' : 'yellow'}`}>{props.character.stars >= 3 ? `★`: `☆`}</span>
                <span className={`star ${props.character.redStars >= 4 ? 'red' : 'yellow'}`}>{props.character.stars >= 4 ? `★`: `☆`}</span>
                <span className={`star ${props.character.redStars >= 5 ? 'red' : 'yellow'}`}>{props.character.stars >= 5 ? `★`: `☆`}</span>
                <span className={`star ${props.character.redStars >= 6 ? 'red' : 'yellow'}`}>{props.character.stars >= 6 ? `★`: `☆`}</span>
                <span className={`star ${props.character.redStars >= 7 ? 'red' : 'yellow'}`}>{props.character.stars >= 7 ? `★`: `☆`}</span>
            </p>
            <p className={`level ${goalLevel.level >= props.character.goals.tier}`}>{props.character.level}</p>
            <p className={`gear ${goalLevel.gear >= props.character.goals.tier}`}>{props.character.gear.tier}</p>
            <p className={`iso ${goalLevel.iso >= props.character.goals.tier}`}>{props.character.iso.tier}</p>
            <p className='abilities'>
                <span className={`ability ${goalLevel.basic >= props.character.goals.tier}`}>{props.character.abilities.basic}</span>
                <span className={`ability ${goalLevel.special >= props.character.goals.tier}`}>{props.character.abilities.special}</span>
                {minion}
                <span className={`ability ${goalLevel.passive >= props.character.goals.tier}`}>{props.character.abilities.passive}</span>
            </p>
            <p className={`goal ${goalLevel.tier >= props.character.goals.tier}`}>{goalLevel.tier} / {props.character.goals.tier}</p>

        </div>
    )
}

export default CharacterLink;