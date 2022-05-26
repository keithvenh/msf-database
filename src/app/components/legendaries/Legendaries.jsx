import { legendaries } from '../../../db/db';
import LegendaryLink from './LegendaryLink';
import checkCollectionStatus from '../../helpers/checkCollectionStatus';
function Legendaries(props) {

    let characters = [];
    let collected = 0;
    let legends = legendaries.map((legend) => {
        for(let i = 0; i < legend.characters.length; i++) {
            characters.push(legend.characters[i]);
        }
        return <LegendaryLink legendary={legend} key={legend.name}/>;
    })

    // for(let i = 0; i < legendaries.length; i++) {
    //     for(let j = 0; j < legendaries[i].characters.length; j++) {
    //         if(!characters.includes(legendaries[i].characters[j])) {
    //             characters.push(legendaries[i].characters[j]);
    //             collected += checkCollectionStatus(legendaries[i].characters[j])
    //         }

    //     }
    // }
    console.log(legends);

    return (
        <div className='legendaries'>
            <h2>Legendaries</h2>
            <p>{legendaries.filter((legend) => {return legend.collected == true}).length} / { legendaries.length }</p>

            <h3>Characters Required</h3>
            <p>{collected} / {characters.length}</p>
            {legends}
        </div>
    )
}

export default Legendaries;