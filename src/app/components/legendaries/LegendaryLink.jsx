import checkCollectionStatus from '../../helpers/checkCollectionStatus';

function LegendaryLink(props) {
    const legendary = props.legendary;
    let collectedCharacters = 0;
    let requiredCharacters = 0;
    let collectedRequiredCharacters = 0;
    for(let i = 0; i < legendary.characters.length; i++){
        collectedCharacters += checkCollectionStatus(legendary.characters[i]);
    }
    if(legendary.requiredCharacters) {
        for(let i = 0; i < legendary.requiredCharacters.length; i++){
            requiredCharacters += 1;
            collectedRequiredCharacters += checkCollectionStatus(legendary.requiredCharacters[i]);
        }
    }
    return(

        <div className='legendaryLink'>
            <h2 className='legendaryName'>{legendary.name}</h2>
            <p className='legendaryCharacters'><i className='fa-solid fa-users'></i>{collectedCharacters > 5 ? 5 : collectedCharacters} / 5</p>
            Special Characters Collected
            <p className='legendaryCharactersRequired'>{collectedRequiredCharacters} / {requiredCharacters}</p>
        </div>

    )
}

export default LegendaryLink;