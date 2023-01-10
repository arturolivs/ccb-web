import React from 'react'

import Button from '../../../components/Button'
import Card from '../../../components/Card'
import Form from '../../../components/Form'
import TextInput from '../../../components/TextInput'

const ChurchFilter = () => {
    return (
        <Card>
            <Form onSubmit={(e) => console.log(e)}>
                <TextInput label="Localidade" name="locale" />
                <TextInput label="Cod. Endereço" name="cod-address" />

                <Button type="submit">Filtrar</Button>
            </Form>
        </Card>
    )
}

export default ChurchFilter
