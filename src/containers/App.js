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
        fetch('https://jsonplaceholder.typicode.com/users') //fetch是window物件內建的方法，
                                                            //現在的瀏覽器都內建window.fetch()，幫助我們request東西的工具
        .then(response=>response.json())
        .then (users=>this.setState({robots:users}))//state改變了，所以會開始進入update的life cycle。
                                                    //如果console log 印出順序的話，會發現順序是：
                                                    //constructor (robots空陣列)--> render (渲染出無畫面)--> 
                                                    //componentDidMount (接收到state改變，robots屬性有資料進來)
                                                    // --> render (渲染出畫面)
        // console.log('componentDidMount')
    }

    onSearchChange = (event) =>{   //class裡的自訂function要用箭頭函式的寫法
        // console.log(event)
        // console.log(event.target.value)

        this.setState({ searchfield: event.target.value })
        // 要改變state的話，使用.setState()。 不像直覺是寫this.stae.searchfield = 
      

        // console.log(filteredRobots)
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

/*

現在App有兩個分支 ----> SearchBox 
                ----> CardList ----> Card

SearchBox需要跟CardList互相溝通，方式是得
將資訊傳給它的parent:App，再交給App將資料傳給 CardList

*/
export default App;