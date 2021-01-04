import { useState } from 'react'
import InputRange from 'react-input-range'
import RoutesTable from './RoutesTable'
import { Input, Button, Collapse } from 'reactstrap'
import 'react-input-range/lib/css/index.css'

const Home = () => {
    const [search, setSearch] = useState('')
    const [range, setRange] = useState({ min: 0, max: 20 })

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    function checkFilter(route) {
        if (!new RegExp(search, 'i').test(route.name)) {
            return false
        }
        if (route.distance < range.min || route.distance > range.max) {
            return false
        }
        return true
    }

    return (
        <>
            <div className='mt-5 mb-3 '>
                <Input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search Here'
                />
                <div className='text-end'>
                    <Button color='link' onClick={toggle}>
                        Advanced Search
                    </Button>
                </div>
                <Collapse className='border rounded px-5 py-4' isOpen={isOpen}>
                    <h4 className='pb-4 text-center'>
                        What distance would you like to look at?
                    </h4>
                    <InputRange
                        minValue={0}
                        maxValue={20}
                        value={range}
                        formatLabel={(value, type) =>
                            type === 'value' && `${value} miles`
                        }
                        onChange={(value) => setRange(value)}
                    />
                </Collapse>
                <div className='collapse p-5 border' id='advancedSearch'></div>
            </div>
            <RoutesTable checkFilter={checkFilter} />
        </>
    )
}

export default Home
