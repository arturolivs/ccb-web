import React from 'react'

import Button from '../../../components/Button'
import Form from '../../../components/Form'
import TextInput from '../../../components/TextInput'

const ChurchFilter = () => {
    return (
        <Form onSubmit={(e) => console.log(e)}>
            <TextInput label="Localidade" name="locale" />
            <TextInput label="Cod. Endereço" name="cod-address" />
            <Button type="submit" value="Filtrar" />
        </Form>
    )
}

export default ChurchFilter
