import React,{Component} from 'react'
import "./App.css";
import User from "./components/User";
/*
* 类组件必须要继承React。Component
* */
class App extends Component{
    render() {
        return (<div>
            <User name={'猪八戒'} age={28} gender={'男'}/>
        </div>)
    }


}
export default App;