import React, { Component } from 'react';
import CardList from './CardList'
import { monster } from './monster';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';



class App extends Component {
    constructor() {
        super()
        this.state = {
            monster: monster,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredmonster = this.state.monster.filter(monster => {
            return monster.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc' >
                <h1>Monster Friend</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList monster={filteredmonster} />
                </Scroll>
            </div>
        )
    }
}
export default App;