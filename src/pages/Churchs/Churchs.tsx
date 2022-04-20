import React from 'react'

import ChurchList from './List'
import ChurchFilter from './Filter'

const Churth = () => {
    return (
        <>
            <h1>Igrejas</h1>

            <ChurchFilter />
            <ChurchList />
        </>
    )
}

export default Churth
