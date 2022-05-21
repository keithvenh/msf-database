function Header(props) {
    return (

        <div className='header'>
            <ul className='links'>
                <li className={`link ${props.currentView === 'dashboard' ? 'active' : ''}`} onClick={() => props.updateView('dashboard')}>Dashboard</li>
                <li className={`link ${props.currentView === 'characters' ? 'active' : ''}`} onClick={() => props.updateView('characters')}>Characters</li>
            </ul>
        </div>
    )
}

export default Header;