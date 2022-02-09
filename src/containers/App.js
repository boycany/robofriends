import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import './App.css'
import Scroll from '../components/Scroll'


class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        // console.log('constructor')
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(response=>response.json())
        .then (users=>this.setState({robots:users}))
        // console.log('componentDidMount')
    }

    onSearchChange = (event) =>{  
        // console.log(event.target.value)

        this.setState({ searchfield: event.target.value })      
    }

    render(){

        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        // console.log('render')
    
        return !robots.length ? 
        <h2>Loading...</h2> :   //因為資料是用JSON從遠端server倒進來，資料一多，可能連線會慢，可寫一個載入中的情況
        (
            <div className="tc">           
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }   
}    

export default App;