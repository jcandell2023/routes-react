import { useContext, useState } from 'react'
import Context from '../utils/context'

const Home = () => {
    const { routes } = useContext(Context)
    const [search, setSearch] = useState('')

    function onClick(id) {
        window.location = id
    }

    return (
        <div>
            <div className='mt-5 mb-3'>
                <input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search Here'
                    className='form-control'
                />
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {routes &&
                        routes
                            .filter((route) => new RegExp(search, 'i').test(route.name))
                            .map((route) => (
                                <tr
                                    key={route.garmin_id}
                                    onClick={() => onClick(route.garmin_id)}
                                    title={route.description}>
                                    <td>{route.name}</td>
                                    <td>{route.distance}</td>
                                </tr>
                            ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
