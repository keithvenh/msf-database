import { roster } from '../../../db/db';
function Character(props) {

    const shards = [15, 30, 55, 80, 130, 200, 300]
    let width = (props.character.shards / shards[props.character.stars]) * 100;
    const grey = '#999999';
    const green = '#33dd33';
    const blue = '#66ccff';
    const purple = '#cc00dd';
    const orange = '#ff9900';
    const teal = '#00ffaa';
    const gearColors = [grey, grey, green, green, green, blue, blue, blue, blue, purple, purple, purple, purple, orange, orange, orange, orange, teal, teal];
    const synergies = props.character.synergies.map((syn) => {
    
                    let synergies = roster.filter((char) => {
                        if(char.name == syn || char.tags.includes(syn)) {
                            return char;
                        }
                    });

                    let chars = synergies.map((char) => {return <p className='charName'>{char.name}</p>})
                    return (
                        <div className='synergyContainer'>
                            <p className='synergy'>{syn}</p>
                            {chars}
                        </div>

                    )
    })
    return (
        <div className='character'>
            <div className='characterSide'>
                <p className="characterLevel">{props.character.level}</p>

                <div className="characterSynergies">
                    {synergies}
                </div>
            </div>
            
            <div className='characterCenter'>

                <h1 className='characterName'>{props.character.name}</h1>
                <div className='characterStars'>
                    <span className={`star ${props.character.redStars >= 1 ? 'red' : 'yellow'}`}>{props.character.stars >= 1 ? `★`: `☆`}</span>
                    <span className={`star ${props.character.redStars >= 2 ? 'red' : 'yellow'}`}>{props.character.stars >= 2 ? `★`: `☆`}</span>
                    <span className={`star ${props.character.redStars >= 3 ? 'red' : 'yellow'}`}>{props.character.stars >= 3 ? `★`: `☆`}</span>
                    <span className={`star ${props.character.redStars >= 4 ? 'red' : 'yellow'}`}>{props.character.stars >= 4 ? `★`: `☆`}</span>
                    <span className={`star ${props.character.redStars >= 5 ? 'red' : 'yellow'}`}>{props.character.stars >= 5 ? `★`: `☆`}</span>
                    <span className={`star ${props.character.redStars >= 6 ? 'red' : 'yellow'}`}>{props.character.stars >= 6 ? `★`: `☆`}</span>
                    <span className={`star ${props.character.redStars >= 7 ? 'red' : 'yellow'}`}>{props.character.stars >= 7 ? `★`: `☆`}</span>
                </div>
                <div className='characterShardsContainer'>
                    <div className='characterShards' style={{ "width": width + "%" }}>
                        <p>{props.character.shards} / {shards[props.character.stars]}</p>
                    </div>
                </div>

            </div>
            <div className='characterSide'>
                <p className='characterGear' style={{ "borderColor": gearColors[props.character.gear.tier] }}>{props.character.gear.tier}</p>
            </div>

        </div>
    )
}

export default Character;