import React from 'react'
import './App.css'
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from './pages'
import Signin from './pages/signin'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path = "/" component = {Home} exact />
                <Route path = "/signin" component = {Signin} exact />
            </Switch>
        </Router>
    )
}

export default App