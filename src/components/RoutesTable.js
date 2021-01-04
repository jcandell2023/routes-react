import { useContext } from 'react'
import Context from '../utils/context'
import { Table, UncontrolledTooltip } from 'reactstrap'

const RouteTable = ({ checkFilter }) => {
    const { routes } = useContext(Context)

    function onClick(id) {
        window.location = id
    }

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {routes &&
                        routes.filter(checkFilter).map((route) => (
                            <tr
                                key={route.garmin_id}
                                id={`a${route.garmin_id}`}
                                onClick={() => onClick(route.garmin_id)}>
                                <td>{route.name}</td>
                                <td>{route.distance.toFixed(2)}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            {routes &&
                routes.filter(checkFilter).map(
                    (route) =>
                        route.description && (
                            <UncontrolledTooltip
                                key={route.garmin_id}
                                placement='top'
                                target={`#a${route.garmin_id}`}>
                                {route.description}
                            </UncontrolledTooltip>
                        )
                )}
        </>
    )
}

export default RouteTable
