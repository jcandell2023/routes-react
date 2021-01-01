import { useParams } from 'react-router-dom'

const RoutePage = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>{id}</h1>
            <iframe
                src={`https://connect.garmin.com/modern/course/embed/${id}`}
                width='465'
                height='548'
                title='route'
                frameBorder='0'></iframe>
        </div>
    )
}

export default RoutePage
