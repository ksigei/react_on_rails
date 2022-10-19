import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '.././redux/store'
import Greeting from './Greetings'

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Route path="/" component={Greeting} />
        </Router>
    </Provider>
    );
}

export default App