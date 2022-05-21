function CharacterLink(props) {

    return (
        <div className='characterLink'>
            
            <h2 className='name'>{props.character.name}</h2>
            <p  className='power'>{props.character.power}</p>
            <p className='level'>{props.character.level}</p>
            <p className='gear'>{props.character.gear.tier}</p>
            <p className='iso'>{props.character.iso.tier}</p>
            <p className='class'>{props.character.iso.class}</p>

        </div>
    )
}

export default CharacterLink;