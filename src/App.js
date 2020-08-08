import React, { Component } from 'react';
import CardList from './CardList'
import { friends } from './friends';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';



class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: friends,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredfriends = this.state.friends.filter(friends => {
            return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc' >
                <h1>Friends Avatar</h1>
                <SearchBox searchChange={this.onSearchChange} />

                <Scroll>
                    <CardList friends={filteredfriends} />
                </Scroll>
            </div>
        )
    }
}
export default App;