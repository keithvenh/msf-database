import { roster } from '../../../db/db';

function Dashboard(props) {

    const charactersCollected = roster.filter((char) => { return char.stars > 0 }).length;







    return (
    
        <div className='dashboard'>
            <div className='roster'>
                <div className='characters'>
                    <h2 className='dashboardTitle'>Characters</h2>
                    <p className='dashboardStat'>{charactersCollected} / {roster.length}</p>
                    <div className='dashboardBarContainer'>
                        <div className='dashboardBar' style={{"width": `${(charactersCollected / roster.length)*100}%`}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;