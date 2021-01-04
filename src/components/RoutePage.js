import { useContext, useLayoutEffect, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../utils/context'

const RoutePage = () => {
    const { routes } = useContext(Context)
    const { id } = useParams()
    const [scale, setScale] = useState(1)

    const [curRoute, setCurRoute] = useState(null)

    useEffect(() => {
        if (routes) {
            setCurRoute(routes.find((route) => Number(route.garmin_id) === Number(id)))
        }
    }, [id, routes])

    function updateScale() {
        setScale(Math.min((window.innerWidth - 24) / 465, 1))
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', updateScale)
        updateScale()
    }, [])

    return (
        <>
            {routes ? (
                curRoute ? (
                    <div className='text-center'>
                        <h1 className='display-1'>{curRoute.name}</h1>
                        <h1>{curRoute.distance} miles</h1>
                        {curRoute.description && (
                            <p className='lead'>{curRoute.description}</p>
                        )}
                        <iframe
                            src={`https://connect.garmin.com/modern/course/embed/${id}`}
                            width='465'
                            height='548'
                            title='route'
                            style={{
                                transform: `scale(${scale})`,
                                transformOrigin: 'top left',
                            }}
                            frameBorder='0'></iframe>
                    </div>
                ) : (
                    <h1>Couldn't find that route</h1>
                )
            ) : null}
        </>
    )
}

export default RoutePage
