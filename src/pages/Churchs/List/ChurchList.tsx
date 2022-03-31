import React from 'react'
import Table from '../../../components/Table'

import mock from './mock'

import Church from '../../../types/Church'

const cols = [
    { id: 'locale', label: 'Localidade' },
    { id: 'codEndereco', label: 'Cod. Endereço' },
]

const ChurchList = () => {
    return <Table columns={cols} data={mock} />
}

export default ChurchList
