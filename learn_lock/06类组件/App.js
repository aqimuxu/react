import React from 'react'

/*
* 类组件必须要继承React。Component
* */
class App extends React.Component{
    // 类组件中必须有一个render方法，且方法的返回值是一个JSX
    render() {
        return <div>我是一个类组件</div>
    }
}
export default App;