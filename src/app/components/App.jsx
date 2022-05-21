import React from 'react';
import { db } from '../../db/db';
import Header from './header/Header';
import Dashboard  from './dashboard/Dashboard';
import Characters from './characters/Characters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: <Dashboard />,
      currentView: 'dashboard',
      previousViews: ['dashboard']
    }
    this.updateView = this.updateView.bind(this);
  }

  updateView(page) {
    let view = '';

    switch(page) {
      case 'characters':
        view = <Characters />
        break;
      case 'dashboard':
        view = <Dashboard />;
        break;
      default:
        view = <Dashboard />;
    }

    this.setState(
      {
        view: view,
        currentView: page,
        previousViews: [...this.state.previousViews, page]
      })
    
  }

  render() {

    return (
      <div className="App">
        <h1 className='title'>Marvel Strike Force Database</h1>
        <Header updateView={this.updateView} currentView={this.state.currentView} />
        <div className='view'>
          {this.state.view}
        </div>
      </div>
    );

  }
}

export default App;
