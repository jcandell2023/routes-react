import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RoutePage from './components/RoutePage'
import { useEffect, useState } from 'react'
import { db } from './firebase/config'

function App() {
    const [routes, setRoutes] = useState(null)

    useEffect(() => {
        db.collection('routes')
            .orderBy('name')
            .get()
            .then((query) => {
                const data = query.docs.map((doc) => doc.data())
                setRoutes(data)
            })
    }, [])
    return (
        <Router>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route path='/:id'>
                        <RoutePage routes={routes} />
                    </Route>
                    <Route path='/'>
                        <Home routes={routes} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
