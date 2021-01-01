const Home = ({ routes }) => {
    function onClick(id) {
        window.location = id
    }

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {routes &&
                        routes.map((route) => (
                            <tr
                                key={route.garmin_id}
                                onClick={() => onClick(route.garmin_id)}>
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
