import React from 'react'
import Table from '../../../components/Table'
import useGetAsync from '../../../hooks/useGetAsync'
import Church from '../../../types/Church'

const cols = [
    { id: 'locale', label: 'Localidade' },
    { id: 'codEndereco', label: 'Cod. Endereço' },
]
const ChurchList = () => {
    const [data, error, loading] = useGetAsync<Church[]>('churchs')

    if (error) return null
    if (loading) return <h1>Carregando</h1>
    if (data) return <Table columns={cols} data={data} />

    return null
}

export default ChurchList
