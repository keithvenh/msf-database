function Character(props) {

    const shards = [15, 30, 55, 80, 130, 200]
    let width = (props.character.shards / shards[props.character.stars]) * 100;
    console.log(width);
    let style = {
        "width": width + "%"
    }
    return (
        <div className='character'>
            
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
                <div className='characterShards' style={style}>
                    <p>{props.character.shards} / {shards[props.character.stars]}</p>
                </div>
            </div>

        </div>
    )
}

export default Character;