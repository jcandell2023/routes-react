import Home from './components/Home'
import AppNavbar from './components/AppNavbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RoutePage from './components/RoutePage'
import { useEffect, useState } from 'react'
import { db } from './utils/firebase'
import Context from './utils/context'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <Context.Provider value={{ routes }}>
            <Router>
                <AppNavbar />
                <Container>
                    <Switch>
                        <Route path='/:id'>
                            <RoutePage />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </Context.Provider>
    )
}

export default App
