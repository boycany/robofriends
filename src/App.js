import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';


class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) =>{
        // console.log(event)
        // console.log(event.target.value)

        this.setState({ searchfield: event.target.value })
        // 要改變state的話，使用.setState()。 不像直覺是寫this.stae.searchfield = 
      

        // console.log(filteredRobots)
    }

    render(){

        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className="tc">           
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        )
    }    
}
/*

現在App有兩個分支 ----> SearchBox 
                ----> CardList ----> Card

SearchBox需要跟CardList互相溝通，方式是得
將資訊傳給它的parent:App，再交給App將資料傳給 CardList

*/
export default App;