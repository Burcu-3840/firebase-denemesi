import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import {BrowserRouter as Router,  Route} from 'react-router-dom'
import 'antd/dist/antd.css';



const App = () => {
    return (
        <Router>
            <Route exact path = '/' component={Home}/>
            <Route exact path = '/login' component={Login}/>
            <Route exact path = '/dashboard' component={Dashboard}/> 
            <Route exact path = '/register' component={Register}/>
            
        </Router>
    )
}





export default App;


