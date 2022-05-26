import React from 'react';
import { roster } from '../../../db/db';
import CharacterLink from './CharacterLink';
import Character from './Character';
import Dashboard from '../dashboard/Dashboard';

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'all',
            character: '',
            sort_by: 'power',
            sort_order: 'desc'
        }
        this.updateSort = this.updateSort.bind(this);
        this.sortCharacters = this.sortCharacters.bind(this);
    }

    updateSort(sort_by) {
        let sort_order = 'desc'
        if(this.state.sort_by === sort_by) {
            this.state.sort_order === 'asc'? sort_order = 'desc' : sort_order = 'asc';
        }
        this.setState({
            sort_by: sort_by,
            sort_order: sort_order
        })
        this.sortCharacters();
    }

    sortCharacters(sort_by = this.state.sort_by, characters = roster) {

        if(sort_by == 'stars') {
            characters.sort((a, b) => {
                if(this.state.sort_order == 'asc') {
                    if( b['redStars'] > a['redStars'] ) { return -1; }
                    if( b['redStars'] < a['redStars'] ) { return 1; }
                    return 0;
                } else {
                    if( b['redStars'] < a['redStars'] ) { return -1; }
                    if( b['redStars'] > a['redStars'] ) { return 1; }
                    return 0;
                }
            })
        }
   
        if(sort_by == 'goals' || sort_by == 'iso' || sort_by == 'gear') {
            characters.sort((a, b) => {
                if(this.state.sort_order == 'asc') {
                    if( b[sort_by]['tier'] > a[sort_by]['tier'] ) { return -1; }
                    if( b[sort_by]['teir'] < a[sort_by]['tier'] ) { return 1; }
                    return 0;
                } else {
                    if( b[sort_by]['tier'] < a[sort_by]['tier'] ) { return -1; }
                    if( b[sort_by]['tier'] > a[sort_by]['tier'] ) { return 1; }
                    return 0;
                }
            })
        }else {
            characters.sort((a, b) => {
                if(this.state.sort_order == 'asc') {
                    if( b[sort_by] > a[sort_by] ) { return -1; }
                    if( b[sort_by] < a[sort_by] ) { return 1; }
                    return 0;
                } else {
                    if( b[sort_by] < a[sort_by] ) { return -1; }
                    if( b[sort_by] > a[sort_by] ) { return 1; }
                    return 0;
                }
            })
        }

        return characters;

    }

    render() {

        const sortedCharacters = this.sortCharacters()
        const  characters = sortedCharacters.map((char) => <CharacterLink character={char} key={char.name} viewCharacter={this.props.viewCharacter} />)

        return (
            <div className='characters'>
                
                <div className='characterLink headers'>
                
                    <h2 className='name' onClick={() => this.updateSort('name')}>Name</h2>
                    <p  className='power' onClick={() => this.updateSort('power')}>Power</p>
                    <p  className='stars' onClick={() => this.updateSort('stars')}>Stars</p>
                    <p className='level' onClick={() => this.updateSort('level')}>Level</p>
                    <p className='gear' onClick={() => this.updateSort('gear')}>Gear</p>
                    <p className='iso' onClick={() => this.updateSort('iso')}>Iso-8</p>
                    <p className='abilities'>Abilities</p>
                    <p className='goal' onClick={() => this.updateSort('goals')}>Goal</p>
    
                </div>
                {characters}
    
            </div>
        )

    }
}

export default Characters;