import React from 'react'
import Card from '../Card'

import FormStyle from './Form.styles'

interface FormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    children: React.ReactNode
}

const Form = ({ onSubmit, children }: FormProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(e)
    }
    return (
        <Card>
            <FormStyle onSubmit={handleSubmit}>{children}</FormStyle>
        </Card>
    )
}

export default Form
