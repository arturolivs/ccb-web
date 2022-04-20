import React from 'react'
import Table from '../../../components/Table'

import churchsMock from '../Churchs.data'

const cols = [
    { id: 'locale', label: 'Localidade' },
    { id: 'codEndereco', label: 'Cod. Endereço' },
]

const ChurchList = () => {
    return <Table columns={cols} data={churchsMock} />
}

export default ChurchList
