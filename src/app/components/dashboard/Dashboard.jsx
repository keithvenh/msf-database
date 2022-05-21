import { db } from '../../../db/db';

function Dashboard(props) {

    const charactersCollected = db.filter((char) => { return char.stars > 0 }).length;







    return (
    
        <div className='dashboard'>
            <div  className='characters'>
                {charactersCollected + " / " + db.length}
            </div>

            <div className='shards'>

            </div>

            <div className='levels'>

            </div>

            <div className='abilities'>

            </div>

            <div className='iso'>

            </div>
        </div>
    )
}

export default Dashboard;