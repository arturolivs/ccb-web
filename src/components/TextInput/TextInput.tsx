import React from 'react'

import * as S from './TextInput.styles'

interface TextInputProps {
    label: string
    name: string
}

const TextInput = ({ label, name }: TextInputProps) => {
    return (
        <S.Label>
            <S.LabelText>{label}</S.LabelText>
            <S.Input name={name} type="text" />
        </S.Label>
    )
}

export default TextInput
